import React from 'react';
import {string, bool} from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.videoNode = React.createRef();
  }

  _play() {
    this.videoNode.current.muted = true; // Обходной путь. Если задать атрибут muted тегу <video>, то при тестировании падает ошибка: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering. Референс - https://github.com/facebook/react/issues/10389#issuecomment-512565626
    this.videoNode.current.play();
  }

  _reset() {
    this.videoNode.current.src = this.props.src;
  }

  componentDidUpdate() {
    if (this.props.active) {
      this._play();
    } else {
      this._reset();
    }
  }

  render() {
    const {src, poster} = this.props;

    return (
      <video
        src={src}
        poster={poster}
        ref={this.videoNode}
        width="280"
        height="175"
      ></video>
    );
  }
}

VideoPlayer.propTypes = {
  active: bool,
  src: string.isRequired,
  poster: string.isRequired
};

export default VideoPlayer;
