import { combineReducers } from 'redux';
import { reducer as moneyCounterReducer } from '../pages/moneyCounter/store';
import { reducer as ageCounterReducer } from '../pages/ageCounter/store';

const reducers = combineReducers({
	ageCounter: ageCounterReducer,
	moneyCouter: moneyCounterReducer
});

export default reducers;
