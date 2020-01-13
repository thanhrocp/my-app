import * as Types from './../consts/ConstsType';

var initialState = [];

var findId = (data, id) => {
    var rl = -1;
    data.forEach((dt, idex) => {
        if (dt.id === id) {
            rl = idex;
        }
    });
    return rl;
}

const employees = (state = initialState, action) => {
	var index = -1;
	var { id, employees } = action;
    switch (action.type) {
        case Types.GET_ALL_DATA :
            state = action.employees;
            return [...state];
        case Types.DELETE_DATA:
        	index = findId(state, id);
        	state.splice(index, 1);
        	return [...state];
        case Types.ADD_DATA:
        	state.push(action.employees);
        	return [...state];
        case Types.UPDATE_DATA:
            index = findId(state, employees.id);
            state[index] = employees;
            return [...state];
        default: return [...state];
    }
};

export default employees;