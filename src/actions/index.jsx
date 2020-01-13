import * as Types from './../consts/ConstsType';
import api from './../utils/api';

export const actionFetchRequest = () => {
	return (dispatch) => {
		return api('employees', 'GET', null).then(respon => {
			dispatch(actionFetch(respon.data));
		})
	}
}

export const actionFetch = (employees) => {
	return {
		type : Types.GET_ALL_DATA,
		employees
	}
}

export const actionDeleteRequest = (id) => {
	return dispatch => {
		return api(`employees/${id}`, 'DELETE', null).then(respon => {
			dispatch(actionDelete(id));
		})
	}
}

export const actionDelete = (id) => {
	return {
		type : Types.DELETE_DATA,
		id
	}
}

export const actionAddRequest = (employees) => {
	return dispatch => {
		return api('employees', 'POST', employees).then(respon => {
			dispatch(actionAdd(respon.data));
		})
	}
}

export const actionAdd = (employees) => {
	return {
		type : Types.ADD_DATA,
		employees
	}
}

export const actionEditRequest = (id) => {
	return dispatch => {
		return api(`employees/${id}`, 'GET', null).then(respon => {
			dispatch(actionEdit(respon.data));
		})
	}
}

export const actionEdit = (employees) => {
	return {
		type : Types.EDIT_DATA,
		employees
	}
}

export const actUpdateDataRequest = (employees) => {
	return dispatch => {
		return api(`employees/${employees.id}`, 'PUT', employees).then(respon => {
			dispatch(actUpdateData(respon.data));
		})
	}
}

export const actUpdateData = (employees) => {
	return {
		type : Types.UPDATE_DATA,
		employees
	}
}