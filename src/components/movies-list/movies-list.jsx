import React from 'react';
import {withRouter} from 'react-router-dom';
import {arrayOf, shape, string, func} from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
    };
  }

  onCardClickWrapper(evt) {
    evt.preventDefault();
    this.props.history.push(`/movie-page`);
    return this.props.onMovieCardClick(this.state.activeItem);
  }

  render() {
    const {dataArr} = this.props;

    return (
      <div className='catalog__movies-list'>
        {dataArr.map((dataItem, i) => {
          return (
            <SmallMovieCard
              {...dataItem}
              onClick={this.onCardClickWrapper.bind(this)}
              onMouseEnter={() => this.setState({activeItem: dataItem})}
              onMouseLeave={() => this.setState({activeItem: null})}
              key={`element-` + i}
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
