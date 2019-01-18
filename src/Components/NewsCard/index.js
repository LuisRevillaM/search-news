import React from "react";
import "./NewsCard.css";
import defaultImage from "../../assets/default-image.png";

const NewsCard = props => {
  let imageUrl = props.urlToImage ? props.urlToImage : defaultImage;
  return (
    <div key={props.url} className="news-card">
      <img alt="article" src={imageUrl} />
      <div className="news-card__summary">
        <div className="news-card__title">{props.title}</div>
        <div className="news-card__description">{props.description}</div>
        <a target="_blank" className="news-card__more-btn" href={props.url}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
