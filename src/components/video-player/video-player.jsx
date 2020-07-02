import React from 'react';
import {string, bool} from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.videoNode = React.createRef();
    this.state = {playing: false};
  }

  componentDidUpdate() {
    this.setState({playing: this.props.active}); // можно было и без стейта обойтись, но не понял как тогда тестировать состояние. Пытался заполучить video.paused - не вышло

    if (this.state.playing) {
      this.videoNode.current.muted = true; // Обходной путь. Если задать атрибут muted, то падает ошибка: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.
      this.videoNode.current.play();
    } else {
      this.videoNode.current.src = this.props.src;
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
