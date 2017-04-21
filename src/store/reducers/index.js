import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');

export default combineReducers({
    routing: routerReducer
});