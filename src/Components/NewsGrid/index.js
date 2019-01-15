import React from "react";
import "./NewsGrid.css";
import NewsCard from "../NewsCard/";

const NewsGrid = props => {
  return (
    <div className="news-grid">
      {props.news.map(n => {
        return <NewsCard key={n.url} {...n} />;
      })}
    </div>
  );
};

export default NewsGrid;
