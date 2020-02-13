import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import store from '../../store';
import * as actionCreators from './store/actionCreators';
const { add, sub } = bindActionCreators(actionCreators, store.dispatch);

class AgeCounter extends Component {
	state = store.getState().ageCounter;
	componentDidMount() {
		store.subscribe(() => {
			this.setState(store.getState().ageCounter);
		});
	}
	render() {
		const { ageNum } = this.state;
		return (
			<div>
				<p>
					{ageNum}
				</p>
				<button onClick={add}>add</button>
				<button onClick={sub}>sub</button>
			</div>
		);
	}
}

export default AgeCounter;
