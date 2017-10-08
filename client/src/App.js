import React, { Component } from 'react';
import Checkbook from "./Checkbook";
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		//Checkbook.changeList();

		return (
			<div className="App">
				<div>
					<Checkbook/>
				</div>
			</div>
		);
	}
}

export default App;
