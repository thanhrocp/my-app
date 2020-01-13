import { combineReducers } from 'redux';
import employees from './employees';
import employEdit from './employEdit';

const appReducers = combineReducers({
    employees,
    employEdit
});

export default appReducers;