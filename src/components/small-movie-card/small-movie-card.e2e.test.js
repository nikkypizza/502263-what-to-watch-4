import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

const mock = {
  title: `Snatch`,
  imgSrc: `src/image.jpeg`,
  linkURL: `https://index.html`,
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
        <SmallMovieCard {...mock} />
    );

    main.find(`.small-movie-card__title`).simulate(`click`);
    expect(mock.onClick).toHaveBeenCalledTimes(1);
  });

  it(`should react to mouse enter`, () => {
    const main = mount(
        <SmallMovieCard {...mock} />
    );

    main.find(`.small-movie-card`).simulate(`mouseenter`);
    expect(mock.onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it(`should react to mouse leave`, () => {
    const main = mount(
        <SmallMovieCard {...mock} />
    );

    main.find(`.small-movie-card`).simulate(`mouseleave`);
    expect(mock.onMouseLeave).toHaveBeenCalledTimes(1);
  });
});
