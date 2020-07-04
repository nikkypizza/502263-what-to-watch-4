import React from 'react';
import {withRouter} from 'react-router-dom';
import {arrayOf, shape, string, func} from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
      hoverTimer: null,
      isVideoPlaying: false
    };
  }

  _resetComponent() {
    clearTimeout(this.state.hoverTimer);

    this.setState({
      isVideoPlaying: false,
      activeItem: null
    });
  }

  _handleCardTitleCLick(evt) {
    evt.preventDefault();
    this.props.history.push(`/movie-page`);
    return this.props.onMovieCardClick(this.state.activeItem);
  }

  _handleMouseEnter(activeItem) {
    const PLAY_DELAY_MS = 1000;

    const hoverTimer = setTimeout(() => {
      this.setState({isVideoPlaying: true});
    }, PLAY_DELAY_MS);

    this.setState({
      activeItem,
      hoverTimer
    });
  }

  _handleMouseLeave() {
    this._resetComponent();
  }

  componentWillUnmount() {
    this._resetComponent();
  }

  render() {
    const {dataArr} = this.props;
    const {activeItem, isVideoPlaying} = this.state;

    return (
      <div className='catalog__movies-list'>
        {dataArr.map((dataItem, i) => {
          return (
            <SmallMovieCard
              {...dataItem}
              isVideoPlaying={isVideoPlaying && activeItem === dataItem}
              onClick={this._handleCardTitleCLick.bind(this)}
              onMouseEnter={() => this._handleMouseEnter(dataItem)}
              onMouseLeave={() => this._handleMouseLeave()}
              key={`element-${i}`}
            />
          );
        })
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
  onMovieCardClick: func,
  history: shape({
    history: func
  }),
  dataArr: arrayOf(shape({
    title: string.isRequired,
    mainPosterUrl: string.isRequired
  })).isRequired
};

export default withRouter(MoviesList);
