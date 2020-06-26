import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import MoviesList from './movies-list.jsx';
import filmsArr from '../../mocks/films.js';

describe(`Main Component`, () => {
  it(`renders`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MoviesList dataArr={filmsArr} />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
