import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import Main from './main.jsx';
import promoObj from '../../mocks/promo.js';
import filmsArr from '../../mocks/films.js';

describe(`Main Component`, () => {
  it(`renders`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Main
            promoDataObj={promoObj}
            moviesDataArr={filmsArr}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
