import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import RowComponent from "../../components/RowComponent";
import Api from "../../app/api";
import { setCompleteResponse, setNewsList } from "../NewsList/newsListActions";
import "./newsList.scss";

const NewsList = ({
  setNewsList,
  newsList,
  setCompleteResponse,
  completeResponse
}) => {
  const [pageCount, setPageCount] = useState(0),
    upVoteNews = rowValue => {
      const toModifyNewsList = [...newsList],
        newsIndex = newsList.findIndex(
          eachItem => eachItem.objectID === rowValue.objectID
        ),
        upVoteValue = rowValue.points + 1,
        newItem = { ...rowValue, ...{ points: upVoteValue } };
      toModifyNewsList.splice(newsIndex, 1, newItem);
      setNewsList(toModifyNewsList);
    },
    handleDomainClick = storyQuery => {
      const getStoryQuery = async () => {
        const pageResult = await Api.fetchStoryQuery(storyQuery);
        console.log("getStoryQuery", pageResult);
        setCompleteResponse(pageResult);
        setNewsList(pageResult.data.hits);
      };
      getStoryQuery();
    },
    removeNewsItem = rowValue => {
      const toModifyNewsList = [...newsList],
        newsIndex = newsList.findIndex(
          eachItem => eachItem.objectID === rowValue.objectID
        );

      toModifyNewsList.splice(newsIndex, 1);
      setNewsList(toModifyNewsList);
    },
    allRows = newsList.map((eachItem, index) => {
      return (
        <RowComponent
          key={`row-${index}`}
          rowValue={eachItem}
          upVoteNews={upVoteNews}
          handleDomainClick={handleDomainClick}
          removeNewsItem={removeNewsItem}
        />
      );
    }),
    handleMoreClick = () => {
      const newPageCount = pageCount + 1;
      setPageCount(newPageCount);
      const getPageQuery = async () => {
        const pageResult = await Api.fetchPageQuery(newPageCount);
        console.log("getPageQuery", pageResult);
        setCompleteResponse(pageResult);
        setNewsList(pageResult.data.hits);
      };
      getPageQuery();
    };

  useEffect(() => {
    const getNewsList = async () => {
      const pageResult = await Api.fetchFrontPage();
      setCompleteResponse(pageResult);
      setNewsList(pageResult.data.hits);
      console.log("result", pageResult);
    };
    getNewsList();
  }, []);

  return (
    <div className="content-container">
      {allRows}
      <div className="more-text" onClick={handleMoreClick}>
        More
      </div>
    </div>
  );
};

const mapStateToProps = ({ newsListReducer }) => {
  const { newsList, completeResponse } = newsListReducer;
  return {
    newsList,
    completeResponse
  };
};

NewsList.propTypes = {
  setNewsList: propTypes.func,
  newsList: propTypes.array,
  setCompleteResponse: propTypes.func,
  completeResponse: propTypes.object
};

const mapDispatchToProps = dispatch => ({
  setNewsList: payload => dispatch(setNewsList(payload)),
  setCompleteResponse: payload => dispatch(setCompleteResponse(payload))
});

export default React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewsList)
);
