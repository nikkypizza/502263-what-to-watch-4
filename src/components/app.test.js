import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const mock = {
  promoDataObj: {
    title: `Grand Torino`,
    genre: `drama`,
    releaseYear: 2009
  },
  moviesDataArr: [{
    title: `Grand Torino`,
    imgSrc: `pic.jpeg`,
    linkURL: `title.html`
  },
  {
    title: `Grand Torino`,
    imgSrc: `pic.jpeg`,
    linkURL: `title.html`
  },
  {
    title: `Grand Torino`,
    imgSrc: `pic.jpeg`,
    linkURL: `title.html`
  }]
};

describe(`SmallMovieCard Component`, () => {
  it(`renders`, () => {
    const tree = renderer
      .create(
          <App
            promoDataObj={mock.promoDataObj}
            moviesDataArr={mock.moviesDataArr}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
