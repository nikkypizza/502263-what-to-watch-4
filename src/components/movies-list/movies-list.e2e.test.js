import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviesList from './movies-list.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockData = [{
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
}];

describe(`MoviesList Component E2E`, () => {
  it(`correct amount of cards should be rendered`, () => {
    const main = mount(
        <MoviesList dataArr={mockData}/>
    );

    const movieCards = main.find(`.small-movie-card`);
    expect(movieCards.length).toBe(mockData.length);
  });
});
