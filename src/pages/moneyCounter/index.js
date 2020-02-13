import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import store from '../../store';
import * as actionCreators from './store/actionCreators';
const { add, sub, addAsync } = bindActionCreators(actionCreators, store.dispatch);

class MoneyCounter extends Component {
	state = store.getState().moneyCouter;
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState().moneyCouter);
		});
	}
	componentWillUnmount() {
		store.unsubscribe(this.unsubscribe);
	}
	render() {
		const { moneyNum } = this.state;
		console.log(store.getState());
		return (
			<div>
				<p>
					{moneyNum}
				</p>
				<button onClick={add}>add</button>
				<button onClick={sub}>sub</button>
				<button onClick={addAsync}>addAsync</button>
			</div>
		);
	}
}

export default MoneyCounter;
