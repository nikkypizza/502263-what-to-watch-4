import React from "react";
import ReactDOM from "react-dom";

import App from './components/app.jsx';
import filmsArr from './mocks/films.js';
import promoObj from './mocks/promo.js';

ReactDOM.render(
    <App
      promoDataObj={promoObj}
      moviesDataArr={filmsArr}
    />,
    document.getElementById(`root`)
);
