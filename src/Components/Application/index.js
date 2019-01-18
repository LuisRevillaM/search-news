import React from "react";
import NewsContainer from "../NewsContainer";
import NewsGrid from "../NewsGrid/";
import SearchBar from "../SearchBar/";
import "./App.css";

const Application = () => {
  const renderApp = (news, getNews, status) => {
    return (
      <div>
        <SearchBar onSearch={getNews} />
        <NewsGrid news={news} status={status} />
      </div>
    );
  };
  return <NewsContainer className="App">{renderApp}</NewsContainer>;
};

export default Application;
