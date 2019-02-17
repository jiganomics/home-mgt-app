import React, { Component } from 'react';
import Dashboard from './components/display/Dashboard2';
import store from './store';
import Client from "./components/api/Client";

class App extends Component {
	onIncrement() {
		store.dispatch({ type: 'INCREMENT'});
	}
	testFetch() {
		Client.testFetch(data => {
			console.log(data);
		});
	}
  render() {
	const {
		value
	} = this.props;

	return (
    	<div>
	    	<h1>{value}</h1>
			<button onClick={this.onIncrement}>+</button>
			<button onClick={this.testFetch}>Fetch</button>
	    	<Dashboard />
    	</div>
    );
  }
}

export default App;
