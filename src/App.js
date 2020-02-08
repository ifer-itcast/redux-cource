import React, { Component } from 'react';
import * as actionCreators from './actionCreators';
import { connect } from 'react-redux';

// 装饰器
@connect(state => ({ num: state }), actionCreators)
class App extends Component {
	render() {
		const { num, add, sub, addAsync } = this.props;
		return (
			<div>
				<h3>
					{num}
				</h3>
				<button onClick={add}>add</button>
				<button onClick={sub}>sub</button>
				<button onClick={addAsync}>addAsync</button>
			</div>
		);
	}
}

export default App;
