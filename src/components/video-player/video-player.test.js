import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';
import promoObj from '../../mocks/promo.js';

describe(`VideoPlayer Component`, () => {
  it(`renders`, () => {
    const tree = renderer.create(
        <VideoPlayer
          src={promoObj.trailerUrl}
          poster={promoObj.mainPosterUrl}
          active={true}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
