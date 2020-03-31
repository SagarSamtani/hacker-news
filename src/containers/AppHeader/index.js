import React, { useState } from "react";
import ImageComponent from "../../components/ImageComponent";
import "./app-header.scss";

const AppHeader = ({ history }) => {
  const [activeElement, setActiveElement] = useState("top"),
    handleHeaderElementClick = eleValue => {
      setActiveElement(eleValue);
    },
    getListElement = eleValue => {
      return (
        <div
          className={`pd-5 header-elements ${
            activeElement === eleValue ? "active" : ""
          }`}
          onClick={() => handleHeaderElementClick(eleValue)}
        >
          {eleValue}
        </div>
      );
    };

  return (
    <div className="app-header">
      <a href="/">
        <ImageComponent
          imageName="hacker-news-logo.gif"
          imageAlt="hacker-news-logo"
          imageClassName="hacker-news-logo"
        />
      </a>
      {getListElement("top")}
      <div className="pd-5"> | </div>
      {getListElement("new")}
    </div>
  );
};

export default AppHeader;
