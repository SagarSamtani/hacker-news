import React from "react";
import ImageComponent from "../ImageComponent";
import propTypes from "prop-types";
import moment from "moment";
import "./row-component.scss";

const RowComponent = ({
  rowValue,
  upVoteNews,
  handleDomainClick,
  removeNewsItem
}) => {
  const { num_comments, points, title, url, author, created_at } = rowValue;
  let modifiedUrl =
    url &&
    rowValue.url
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .split(/[/?#]/)[0];
  return (
    <div className="row-container">
      <div className="row-elements number-of-comments">
        <span>{num_comments || "-"}</span>
      </div>
      <div className="row-elements polls-upvotes-title-container">
        <span className="upvotes-count"> {points || 0}</span>
        <ImageComponent
          imageClassName="upvote-arrow-img"
          imageName="upvote-arrow-img.gif"
          imageAlt="upvote-arrow-img"
          handleClick={() => {
            upVoteNews(rowValue);
          }}
        />
        <span className="title">
          <a href={url}>{title}</a>
        </span>
      </div>
      <div className="row-elements username-doamin-hide-container">
        <span
          className="link-domain"
          onClick={() => {
            handleDomainClick(modifiedUrl);
          }}
        >
          {modifiedUrl ? `(${modifiedUrl}) ` : "---------"}
        </span>
        <span className="ml-5 username">
          {`by `} <span className="author">{author}</span>
        </span>
        <span className="ml-5 posted-when">{moment(created_at).fromNow()} </span>
        <span className="ml-5 hide" onClick={() => removeNewsItem(rowValue)}>
          [ hide ]
        </span>
      </div>
    </div>
  );
};

RowComponent.propTypes = {
  rowValue: propTypes.object,
  upVoteNews: propTypes.func,
  handleDomainClick: propTypes.func,
  removeNewsItem: propTypes.func
};

export default RowComponent;
