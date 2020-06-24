import React from "react";
import ReactDOM from "react-dom";
import App from './components/app.jsx';
import mockFilmsData from './mocks/films.js';

ReactDOM.render(
    <App
      promoDataObj={mockFilmsData.promo}
      moviesDataArr={mockFilmsData.movies}
    />,
    document.getElementById(`root`)
);
