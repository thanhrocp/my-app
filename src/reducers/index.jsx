import { combineReducers } from 'redux';
import employees from './employees';

const appReducers = combineReducers({
    employees
});

export default appReducers;