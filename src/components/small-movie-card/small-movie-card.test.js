import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

const mock = {
  title: `Snatch`,
  imgSrc: `src/image.jpeg`,
  linkURL: `https://index.html`,
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {}
};

describe(`SmallMovieCard Component`, () => {
  it(`renders`, () => {
    const tree = renderer.create(
        <SmallMovieCard {...mock} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
