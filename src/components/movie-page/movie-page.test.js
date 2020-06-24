import React from 'react';
import renderer from 'react-test-renderer';

import MoviePage, {generateRatingStr, getRatingPlural, getActorsStringWithPostfix} from './movie-page.jsx';
import promoObj from '../../mocks/promo.js';

describe(`MoviePage Component`, () => {
  it(`renders`, () => {
    const tree = renderer.create(
        <MoviePage movieData={promoObj} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe(`MoviePage utils`, () => {
  it(`fn generateRatingStr works correctly`, () => {
    const reference = {
      bad: `Bad`,
      normal: `Normal`,
      good: `Good`,
      veryGood: `Very good`,
      awesome: `Awesome`
    };

    expect(generateRatingStr(1)).toEqual(reference.bad);
    expect(generateRatingStr(3)).toEqual(reference.normal);
    expect(generateRatingStr(6)).toEqual(reference.good);
    expect(generateRatingStr(9.99)).toEqual(reference.veryGood);
    expect(generateRatingStr(10)).toEqual(reference.awesome);
  });

  it(`fn getRatingPlural works correctly`, () => {
    const reference = {
      singular: `rating`,
      plural: `ratings`
    };

    expect(getRatingPlural(0).endsWith(reference.plural)).toBe(true);
    expect(getRatingPlural(1).endsWith(reference.singular)).toBe(true);
    expect(getRatingPlural(1000).endsWith(reference.plural)).toBe(true);
    expect(getRatingPlural(1).endsWith(reference.plural)).toBe(false);
  });

  it(`fn getActorsStringWithPostfix works correctly`, () => {
    const emptyArr = [];
    const arr = [`Actor One`, `Actor Two`];

    expect(getActorsStringWithPostfix(emptyArr)).toEqual(``);
    expect(getActorsStringWithPostfix(arr)).toEqual(`Actor One, Actor Two and others`);
  });
});
