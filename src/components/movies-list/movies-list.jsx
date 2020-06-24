import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
    };
  }

  render() {
    const {dataArr} = this.props;

    return (
      <div className='catalog__movies-list'>
        {dataArr.map((dataItem, i) => {
          return (
            <SmallMovieCard
              {...dataItem}
              onClick={(evt) => evt.preventDefault()}
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
  dataArr: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    linkURL: PropTypes.string.isRequired,
  })).isRequired
};

export default MoviesList;
