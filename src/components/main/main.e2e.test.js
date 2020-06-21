import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  promoTitle: `Breaking Bad`,
  promoGenre: `drama`,
  promoReleaseDate: 2008,
  movieTitlesArr: [`We should talk about kevin`, `HuperuCube`, `Jill`]
};

const onTitleClick = jest.fn();

describe(`Main Component E2E`, () => {
  it(`correct amount of cards should be rendered`, () => {
    const main = mount(
        <Main
          {...mock}
          onMovieTitleClick={onTitleClick}
        />
    );

    const movieCards = main.find(`.small-movie-card`);
    expect(movieCards.length).toBe(mock.movieTitlesArr.length);
  });

  it(`title must be pressed`, () => {
    const main = mount(
        <Main
          {...mock}
          onMovieTitleClick={onTitleClick}
        />
    );

    main.find(`.small-movie-card__title`).forEach((it) => it.simulate(`click`));
    expect(onTitleClick.mock.calls.length).toBe(mock.movieTitlesArr.length);
  });
});
