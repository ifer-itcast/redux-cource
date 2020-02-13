import React, { Component, Fragment } from 'react';

import MoneyCounter from './pages/moneyCounter';
import AgeCounter from './pages/ageCounter';

class App extends Component {
	render() {
		return (
			<Fragment>
				<MoneyCounter />
				<AgeCounter />
			</Fragment>
		);
	}
}

export default App;
