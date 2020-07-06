import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import MoviePage from './movie-page.jsx';
import promoObj from '../../mocks/promo.js';

describe(`MoviePage Component`, () => {
  it(`renders`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <MoviePage
            movieData={promoObj}
            onCardClick={()=>{}}
            dataArr={promoObj.reviews}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
