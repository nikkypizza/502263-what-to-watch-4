import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card.jsx';
import promoObj from '../../mocks/promo.js';

const mockFunctions = {
  onClick: jest.fn(),
  onMouseEnter: jest.fn(),
  onMouseLeave: jest.fn()
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCard E2E`, () => {
  it(`should react to title click`, () => {
    const main = mount(
        <SmallMovieCard {...promoObj} {...mockFunctions} />
    );

    main.find(`.small-movie-card__link`).simulate(`click`);
    expect(mockFunctions.onClick).toHaveBeenCalledTimes(1);
  });

  it(`should react to mouse enter`, () => {
    const main = mount(
        <SmallMovieCard {...promoObj} {...mockFunctions} />
    );

    main.find(`.small-movie-card`).simulate(`mouseenter`);
    expect(mockFunctions.onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it(`should react to mouse leave`, () => {
    const main = mount(
        <SmallMovieCard {...promoObj} {...mockFunctions} />
    );

    main.find(`.small-movie-card`).simulate(`mouseleave`);
    expect(mockFunctions.onMouseLeave).toHaveBeenCalledTimes(1);
  });
});
