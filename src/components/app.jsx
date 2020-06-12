import React from 'react';
import Main from './main/main.jsx';

// eslint-disable-next-line react/prop-types
const App = ({title, genre, releaseDate}) => {
  return (
    <Main
      promoTitle={title}
      promoGenre={genre}
      promoReleaseDate={releaseDate}
    />
  );
};

export default App;
