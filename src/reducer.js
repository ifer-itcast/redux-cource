import * as Types from './actionTypes';

export const counter = (state = 0, action) => {
	switch (action.type) {
		case Types.ADD:
			return state + 1;
		case Types.SUB:
			return state - 1;
		default:
			return state;
	}
};