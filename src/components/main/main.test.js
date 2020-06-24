import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const mainMockData = {
  promoDataObj: {
    title: `Breaking Bad`,
    genre: `drama`,
    releaseYear: 2008
  },
  moviesDataArr: [{
    title: `Midnight Special`,
    imgSrc: `img/midnight-special.jpg`,
    linkURL: `movie-page.html`
  },
  {
    title: `War of the Worlds`,
    imgSrc: `img/war-of-the-worlds.jpg`,
    linkURL: `movie-page.html`
  },
  {
    title: `Dardjeeling Limited`,
    imgSrc: `img/dardjeeling-limited.jpg`,
    linkURL: `movie-page.html`
  }]
};

describe(`Main Component`, () => {
  it(`renders`, () => {
    const tree = renderer.create(
        <Main
          promoDataObj={mainMockData.promoDataObj}
          moviesDataArr={mainMockData.moviesDataArr}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
