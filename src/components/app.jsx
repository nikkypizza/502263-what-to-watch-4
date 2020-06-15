import React from 'react';
import Main from './main/main.jsx';
import PropTypes from 'prop-types';

const App = ({title, genre, releaseDate, titlesArr}) => {
  return (
    <Main
      promoTitle={title}
      promoGenre={genre}
      promoReleaseDate={releaseDate}
      movieTitlesArr={titlesArr}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  titlesArr: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
