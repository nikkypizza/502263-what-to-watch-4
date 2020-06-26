import React from 'react';
import {string, func} from 'prop-types';

const SmallMovieCard = ({title, mainPosterUrl, onClick, onMouseEnter, onMouseLeave}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image">
        <img src={mainPosterUrl} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onClick}>{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  title: string.isRequired,
  mainPosterUrl: string.isRequired,
  onClick: func.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired
};

export default SmallMovieCard;
