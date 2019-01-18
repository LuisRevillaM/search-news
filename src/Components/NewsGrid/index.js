import React from "react";
import "./NewsGrid.css";
import NewsCard from "../NewsCard/";

const NewsGrid = props => {
  const Loading = () => {
    return (
      <div className="loading-container">
        <div className="loading" />
      </div>
    );
  };
  const renderGrid = () => {
    if (props.status === "fetching") {
      return <Loading />;
    } else if (props.status === "success") {
      return props.news.map(n => {
        return <NewsCard key={n.url} {...n} />;
      });
    } else {
      return null;
    }
  };
  return <div className="news-grid">{renderGrid()}</div>;
};

export default NewsGrid;
