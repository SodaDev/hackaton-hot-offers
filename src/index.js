import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';

import configureStore from './store/configureStore';
import "./index.css";

const store = configureStore();

ReactDOM.render(
    <App store={store}>
        <div>Ryanair hackaton</div>
    </App>,
    document.getElementById('root')
);
