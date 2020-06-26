import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from 'react-router-dom';

import MoviesList from './movies-list.jsx';
import filmsArr from '../../mocks/films.js';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MoviesList Component E2E`, () => {
  it(`correct amount of cards should be rendered`, () => {
    const main = mount(
        <BrowserRouter>
          <MoviesList dataArr={filmsArr}/>
        </BrowserRouter>
    );

    const movieCards = main.find(`.small-movie-card`);
    expect(movieCards.length).toBe(filmsArr.length);
  });
});
