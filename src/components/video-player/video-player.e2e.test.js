import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player.jsx';
import promoObj from '../../mocks/promo.js';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`VideoPlayer E2E`, () => {
  it(`should change play/pause state`, () => {
    const videoNode = mount(
        <VideoPlayer
          src={promoObj.trailerUrl}
          poster={promoObj.mainPosterUrl}
          active={true}
        />
    );

    window.HTMLMediaElement.prototype.play = () => {};
    const inst = videoNode.instance();
    expect(inst.state.playing).toBe(false);

    inst.componentDidUpdate();
    expect(inst.state.playing).toBe(true);
  });
});
