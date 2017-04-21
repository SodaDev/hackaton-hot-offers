import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';

import configureStore from './store/configureStore';
import "./index.css";
import { registerWorker } from "./sw"

const store = configureStore();

ReactDOM.render(
    <App store={store}>
        <div>Ryanair hackaton with manifest</div>
    </App>,
    document.getElementById('root')
);

registerWorker();

Notification.requestPermission();