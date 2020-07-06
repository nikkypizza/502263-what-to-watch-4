import React from 'react';
import {arrayOf, shape, string, number, object, func} from 'prop-types';

import Tabs from '../tabs/tabs.jsx';
import MoviesList from '../movies-list/movies-list.jsx';

const MoviePage = ({movieData, dataArr, onCardClick}) => {
  const CARD_AMOUNT_LIMIT = 4;
  const currentGenre = movieData.genre || `Drama`;

  const listFilterdByGenre = dataArr.filter((it) => it.genre === currentGenre);
  listFilterdByGenre.length = CARD_AMOUNT_LIMIT;

  return (
    <>
      <section className="movie-card movie-card--full" style={{background: movieData.themeColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movieData.backdropPosterUrl} alt={movieData.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movieData.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movieData.genre}</span>
                <span className="movie-card__year">{movieData.releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div >

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movieData.mainPosterUrl} alt={`${movieData.title} poster`} width="218" height="327" />
            </div>
            <Tabs movieData={movieData}/>
          </div>
        </div>
      </section >

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList dataArr={listFilterdByGenre} onMovieCardClick={onCardClick}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

MoviePage.propTypes = {
  movieData: shape({
    title: string.isRequired,
    genre: string.isRequired,
    themeColor: string.isRequired,
    mainPosterUrl: string.isRequired,
    backdropPosterUrl: string.isRequired,
    releaseYear: number.isRequired,
    rating: number.isRequired,
    ratingsAmount: number.isRequired,
    plot: arrayOf(string).isRequired,
    director: string.isRequired,
    actors: arrayOf(string).isRequired
  }),
  dataArr: arrayOf(object.isRequired).isRequired,
  onCardClick: func.isRequired
};

export default MoviePage;
