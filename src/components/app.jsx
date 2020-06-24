import React from 'react';
import Main from './main/main.jsx';
import PropTypes from 'prop-types';

const App = ({promoDataObj, moviesDataArr}) => {
  return (
    <Main
      promoDataObj={promoDataObj}
      moviesDataArr={moviesDataArr}
    />
  );
};

App.propTypes = {
  promoDataObj: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired
  }).isRequired,
  moviesDataArr: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    linkURL: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
