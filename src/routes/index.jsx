import * as React from 'react';
const { IndexRoute, Route } = require('react-router');

import App from '../components/App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={App} />
    </Route>
);
