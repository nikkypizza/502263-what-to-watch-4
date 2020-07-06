import React from 'react';
import {shape, string, number} from 'prop-types';

const Review = ({dataObj}) => {
  const formatDateTime = (date) => new Date(date).toLocaleString(`en-US`, {year: `numeric`, month: `long`, day: `numeric`});

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{dataObj.content}</p>
        <footer className="review__details">
          <cite className="review__author">{dataObj.author}</cite>
          <time className="review__date" dateTime={dataObj.dateTime}>{formatDateTime(dataObj.dateTime)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{dataObj.rating}</div>
    </div>
  );
};

Review.propTypes = {
  dataObj: shape({
    content: string,
    author: string,
    dateTime: string,
    rating: number,
  })};

export default Review;
