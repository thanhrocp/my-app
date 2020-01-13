import * as Types from './../consts/ConstsType';

var initState = {};

const employEdit = (state = initState, action) => {
	switch(action.type) {
		case Types.EDIT_DATA:
			return action.employees;
		default:
			return state;
	}
}

export default employEdit;