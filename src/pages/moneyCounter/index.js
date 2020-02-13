import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

class MoneyCounter extends Component {
	render() {
		const { moneyCouter: { moneyNum }, add, sub, addAsync } = this.props;
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

const mapStateToProps = state => ({
	moneyCouter: state.moneyCouter
});

export default connect(mapStateToProps, actionCreators)(MoneyCounter);
