import React, { Component } from 'react';

import store from '../../store';
import { add } from './store/actionCreators';

class MoneyCounter extends Component {
	state = store.getState()
	handleClick = () => {
		store.dispatch(add());
	}
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
	}
	componentWillUnmount() {
		store.unsubscribe(this.unsubscribe);
	}
	render() {
		const { moneyNum } = this.state;
		return (
			<div>
				<p>
					{moneyNum}
				</p>
				<button onClick={this.handleClick}>add</button>
			</div>
		);
	}
}

export default MoneyCounter;
