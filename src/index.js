import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './components/App';

import configureStore from './store/configureStore';
import "./index.css";
import { registerWorker } from "./sw"

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerWorker();