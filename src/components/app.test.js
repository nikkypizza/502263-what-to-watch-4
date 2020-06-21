import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const promoMovieData = {
  promoTitle: `The Grand Budapest Hotel`,
  promoGenre: `Drama`,
  promoReleaseDate: 2014
};

const movieListTitles = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`];
const onTitleClick = (evt) => evt.preventDefault();

describe(`SmallMovieCard Component`, () => {
  it(`renders`, () => {
    const tree = renderer
      .create(
          <App
            {...promoMovieData}
            movieTitlesArr={movieListTitles}
            onMovieTitleClick={onTitleClick}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
