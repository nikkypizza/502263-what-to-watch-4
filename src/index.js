import React from "react";
import ReactDOM from "react-dom";
import App from './components/app.jsx';

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

ReactDOM.render(
    <App {...promoMovieData}/>,
    document.getElementById(`root`)
);
