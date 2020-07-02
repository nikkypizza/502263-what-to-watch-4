import React from 'react';
import {string, func, bool} from 'prop-types';

import VideoPlayer from '../video-player/video-player.jsx';

const SmallMovieCard = ({title, mainPosterUrl, trailerUrl, onClick, onMouseEnter, onMouseLeave, isVideoPlaying}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer src={trailerUrl} poster={mainPosterUrl} active={isVideoPlaying}/>
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
  trailerUrl: string.isRequired,
  onClick: func.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
  isVideoPlaying: bool
};

export default SmallMovieCard;
