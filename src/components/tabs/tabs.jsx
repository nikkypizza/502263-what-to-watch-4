import React from 'react';
import {shape, string, number, arrayOf} from 'prop-types';

import Review from '../review/review.jsx';

const generateRatingStr = (int) => {
  if (int < 3) {
    return `Bad`;
  } else if (int >= 3 && int < 5) {
    return `Normal`;
  } else if (int >= 5 && int < 8) {
    return `Good`;
  } else if (int >= 8 && int < 10) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};

const convertMinsToStrWithHours = (minutesInt) => {
  const hours = Math.floor(minutesInt / 60);
  const minutes = minutesInt % 60;

  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
};

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.tabNames = [`Overview`, `Details`, `Reviews`];
    this.renderTab = {
      overview: () => {
        const {movieData} = this.props;
        return (
          <>
            <div className="movie-rating">
              <div className="movie-rating__score">{movieData.rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{generateRatingStr(movieData.rating)}</span>
                <span className="movie-rating__count">
                  {(`${movieData.ratingsAmount} rating${movieData.ratingsAmount !== 1 ? `s` : ``}`)}
                </span>
              </p>
            </div>

            <div className="movie-card__text">
              {movieData.plot.map((it, i) => <p key={`element-${i}`}> {it} </p>)}
              <p className="movie-card__director"><strong>Director: {movieData.director}</strong></p>
              <p className="movie-card__starring"><strong>Starring: {(movieData.actors.length ? `${movieData.actors.join(`, `)} and others` : ``)} </strong></p>
            </div>
          </>
        );
      },
      details: () => {
        const {movieData} = this.props;
        return (
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{movieData.director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {(movieData.actors ? movieData.actors.map((item, i) => <React.Fragment key={`element-${i}`}>{item}<br /></React.Fragment>) : ``)}
                </span>
              </p>
            </div>

            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">
                  {convertMinsToStrWithHours(movieData.playtime)}
                </span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{movieData.genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{movieData.releaseYear}</span>
              </p>
            </div>
          </div>
        );
      },
      reviews: () => {
        const {movieData} = this.props;
        return this._renderReviewsInTwoColumns(movieData.reviews);
      }
    };
    this.state = {
      currentTab: `Overview`
    };
    this._handleTabClick = this._handleTabClick.bind(this);
  }

  _renderReviewsInTwoColumns(arr) {
    const columnOne = [];
    const columnTwo = [];
    const columnDelimiterIndex = Math.ceil(arr.length / 2);

    arr.forEach((it, i) => {
      const currentColumn = i + 1 > columnDelimiterIndex ? columnTwo : columnOne;
      currentColumn.push(<Review dataObj={it} key={`element-${i}`} />);
    });

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">{columnOne}</div>
        <div className="movie-card__reviews-col">{columnTwo}</div>
      </div>
    );
  }

  _handleTabClick(e) {
    e.preventDefault();
    this.setState({currentTab: e.target.textContent});
  }

  render() {
    const {currentTab} = this.state;
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {this.tabNames.map((title, i) => {
              return (
                <li
                  className={`movie-nav__item ${(currentTab === title) ? `movie-nav__item--active` : ``}`}
                  onClick={this._handleTabClick}
                  key={`element-${i}`}
                >
                  <a href="#" className="movie-nav__link">{title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        {this.renderTab[currentTab.toLowerCase()]()}
      </div>
    );
  }
}

Tabs.propTypes = {
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
};

export default Tabs;
export {generateRatingStr, convertMinsToStrWithHours};
