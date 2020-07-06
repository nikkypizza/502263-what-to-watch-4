import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {object, arrayOf} from 'prop-types';

import Main from './main/main.jsx';
import MoviePage from './movie-page/movie-page.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentCardData: null
    };
  }

  _onCardClick(props) {
    document.body.scrollIntoView({block: `start`, behavior: `smooth`});
    this.setState({
      currentCardData: props
    });
  }

  render() {
    const {promoDataObj, moviesDataArr} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              promoDataObj={promoDataObj}
              moviesDataArr={moviesDataArr}
              onCardClick={this._onCardClick.bind(this)}
            />
          </Route>
          <Route exact path="/movie-page">
            <MoviePage
              movieData={this.state.currentCardData || promoDataObj}
              dataArr={moviesDataArr}
              onCardClick={this._onCardClick.bind(this)}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoDataObj: object.isRequired,
  moviesDataArr: arrayOf(object.isRequired).isRequired,
};

export default App;
