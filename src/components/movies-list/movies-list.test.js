import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

const mock = [{
  title: `Snatch`,
  imgSrc: `list.jpeg`,
  linkURL: `index.html`
},
{
  title: `Snatch`,
  imgSrc: `list.jpeg`,
  linkURL: `index.html`
},
{
  title: `Snatch`,
  imgSrc: `list.jpeg`,
  linkURL: `index.html`
}];

describe(`Main Component`, () => {
  it(`renders`, () => {
    const tree = renderer.create(
        <MoviesList dataArr={mock} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
