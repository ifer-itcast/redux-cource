import * as actionTypes from './actionTypes';

export const add = () => ({
	type: actionTypes.MONEYCOUNTER_ADD
});

export const sub = () => ({
	type: actionTypes.MONEYCOUNTER_SUB
});

export const addAsync = () => {
	return dispatch => {
		setTimeout(() => {
			dispatch(add());
		}, 1000);
	};
};
