import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';
import filmsArr from '../mocks/films.js';
import promoObj from '../mocks/promo.js';

describe(`SmallMovieCard Component`, () => {
  it(`renders`, () => {
    const tree = renderer
      .create(
          <App
            promoDataObj={promoObj}
            moviesDataArr={filmsArr}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
