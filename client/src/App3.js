import React, { Component } from 'react';
import Bills from "./Bills";
import logo from './logo.svg';
import './App.css';

class App3 extends Component {
	render() {
		//Checkbook.changeList();

		return (
			<div className="App">
				<div>
					<Bills/>
				</div>
			</div>
		);
	}
}

export default App3;
