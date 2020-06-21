import React from 'react';
import Main from './main/main.jsx';
import PropTypes from 'prop-types';

const App = ({promoTitle, promoGenre, promoReleaseDate, movieTitlesArr, onMovieTitleClick}) => {
  return (
    <Main
      promoTitle={promoTitle}
      promoGenre={promoGenre}
      promoReleaseDate={promoReleaseDate}
      movieTitlesArr={movieTitlesArr}
      onMovieTitleClick={onMovieTitleClick}
    />
  );
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoReleaseDate: PropTypes.number.isRequired,
  movieTitlesArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired
};

export default App;
