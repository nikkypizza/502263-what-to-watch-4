import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const mainMockData = {
  promoTitle: `Breaking Bad`,
  promoGenre: `drama`,
  promoReleaseDate: 2008,
  movieTitlesArr: [`We should talk about kevin`, `HuperuCube`, `Jill`],
  onMovieTitleClick: () => ``
};

describe(`Main Component`, () => {
  it(`renders`, () => {
    const tree = renderer.create(
        <Main {...mainMockData} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
