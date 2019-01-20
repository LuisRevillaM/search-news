import React from "react";
import "./NewsGrid.css";
import NewsCard from "../NewsCard/";
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading" />
    </div>
  );
};
const ErrorMsg = () => {
  return <div>There has been an error fetching the resources</div>;
};
const NewsGrid = props => {
  const renderGrid = () => {
    if (props.status === "fetching") {
      return <Loading />;
    } else if (props.status === "success") {
      return props.news.map(n => {
        return <NewsCard key={n.url} {...n} />;
      });
    } else if (props.status === "error") {
      return <ErrorMsg />;
    } else {
      return null;
    }
  };
  return <div className="news-grid">{renderGrid()}</div>;
};

export default NewsGrid;
