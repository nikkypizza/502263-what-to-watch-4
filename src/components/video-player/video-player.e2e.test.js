import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player.jsx';
import promoObj from '../../mocks/promo.js';

Enzyme.configure({
  adapter: new Adapter(),
});

window.HTMLMediaElement.prototype.play = () => {};

const callFnOnStateChange = (initialState, fnName) => {
  const videoNode = mount(
      <VideoPlayer
        src={promoObj.trailerUrl}
        poster={promoObj.mainPosterUrl}
        active={initialState}
      />
  );

  const inst = videoNode.instance();
  const spy = jest.spyOn(inst, fnName);

  videoNode.setProps({active: !initialState});
  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
};

describe(`VideoPlayer E2E`, () => {
  it(`should have a play state`, () => {
    callFnOnStateChange(false, `_play`);
  });

  it(`should have a pause (reset) state`, () => {
    callFnOnStateChange(true, `_reset`);
  });
});
