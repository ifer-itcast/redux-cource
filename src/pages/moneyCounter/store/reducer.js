import * as actionTypes from './actionTypes';

const defaultState = {
	moneyNum: 0
};

export default (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case actionTypes.ADD:
			newState.moneyNum += 1;
			return newState;
		case actionTypes.SUB:
			newState.moneyNum -= 1;
			return newState;
		default:
			return newState;
	}
};
