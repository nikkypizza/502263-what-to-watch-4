import React from 'react';
import renderer from 'react-test-renderer';

import Review from './review.jsx';
import promoObj from '../../mocks/promo.js';

describe(`Review Component`, () => {
  it(`renders`, () => {
    const tree = renderer.create(
        <Review
          dataObj={promoObj}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
