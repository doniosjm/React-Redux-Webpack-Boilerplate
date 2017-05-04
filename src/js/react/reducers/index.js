// redux
import { combineReducers } from 'redux';

// reducers
import pageContent from './pageContent';
import menu from './menu';

// combine all reducers
const rootReducers = combineReducers({ pageContent, menu });

export default rootReducers;