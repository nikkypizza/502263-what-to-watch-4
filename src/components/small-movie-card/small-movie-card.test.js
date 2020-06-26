import React from 'react';
import renderer from 'react-test-renderer';

import SmallMovieCard from './small-movie-card.jsx';
import promoObj from '../../mocks/promo.js';

const mockFn = {
  onClick: ()=>{},
  onMouseEnter: ()=>{},
  onMouseLeave: ()=>{}
};

describe(`SmallMovieCard Component`, () => {
  it(`renders`, () => {
    const tree = renderer.create(
        <SmallMovieCard {...promoObj} {...mockFn}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
