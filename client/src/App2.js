import React, { Component } from 'react';
import Documents from "./Documents";
import logo from './logo.svg';
import './App.css';

class App2 extends Component {
	render() {
		//Checkbook.changeList();

		return (
			<div className="App">
				<div>
					<Documents/>
				</div>
			</div>
		);
	}
}

export default App2;
