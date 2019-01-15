import React from "react";
import "./NewsCard.css";

const NewsCard = props => {
  return (
    <div key={props.url} className="news-card">
      <img alt="article" src={props.urlToImage} />
      <div className="news-card__summary">
        <div className="news-card__title">{props.title}</div>
        <div className="news-card__description">{props.description}</div>
        <a className="news-card__more-btn" href={props.url}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
