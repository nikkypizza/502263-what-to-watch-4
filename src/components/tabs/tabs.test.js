import React from 'react';
import renderer from 'react-test-renderer';

import Tabs, {generateRatingStr, convertMinsToStrWithHours} from './tabs.jsx';
import promoObj from '../../mocks/promo.js';

describe(`Tabs Component`, () => {
  it(`renders`, () => {
    const tree = renderer.create(
        <Tabs movieData={promoObj} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


describe(`Tabs utils`, () => {
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


  it(`fn convertMinsToStrWithHours works correctly`, () => {
    expect(convertMinsToStrWithHours(120)).toEqual(`2h 0m`);
    expect(convertMinsToStrWithHours(50)).toEqual(`50m`);
  });
});
