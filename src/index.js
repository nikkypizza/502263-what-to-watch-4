import React from "react";
import ReactDOM from "react-dom";
import App from './components/app.jsx';

const promoMovieData = {
  promoTitle: `The Grand Budapest Hotel`,
  promoGenre: `Drama`,
  promoReleaseDate: 2014
};

const movieListTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`
];

const onTitleClick = (evt) => {
  evt.preventDefault();
};

ReactDOM.render(
    <App
      {...promoMovieData}
      movieTitlesArr={movieListTitles}
      onMovieTitleClick={onTitleClick}
    />,
    document.getElementById(`root`)
);
