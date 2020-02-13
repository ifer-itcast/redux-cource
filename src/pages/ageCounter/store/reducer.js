import * as actionTypes from './actionTypes';

const defaultState = {
	ageNum: 0
};

export default (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case actionTypes.AGECOUNTER_ADD:
			newState.ageNum += 1;
			return newState;
		case actionTypes.AGECOUNTER_SUB:
			newState.ageNum -= 1;
			return newState;
		default:
			return newState;
	}
};
