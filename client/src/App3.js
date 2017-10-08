import React, { Component } from 'react';
import Bills from "./Bills";
import logo from './logo.svg';
import './App.css';
import './tab.css';
import './fixed-data-table.css';
import Tabs from './tabs';
import Pane from './pane';
import {Table, Column, Cell} from 'fixed-data-table';

// Table data as a list of array.
const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  // .... and more
];

class App3 extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
    	<div>
        <Tabs selected={0}>
          <Pane label="Tab 1">
            <div>
		  <Table
		    rowHeight={50}
		    rowsCount={rows.length}
		    width={500}
		    height={400}
		    headerHeight={50}>
		    <Column
		      header={<Cell>Col 1</Cell>}
		      cell={<Cell>Column 1 static content</Cell>}
		      width={200}
		    />
		    <Column
		      header={<Cell>Col 2</Cell>}
		      cell={22}
		      width={100}
		    />
		    <Column
		      header={<Cell>Col 3</Cell>}
		      cell={({rowIndex, ...props}) => (
			<Cell {...props}>
			  Data for column 3: <a href="#">{rows[rowIndex][2]}</a>
			</Cell>
		      )}
		      width={200}
		    />
		  </Table>
	    </div>
          </Pane>
          <Pane label="Tab 2">
			<div className="App">
				<div>
					<Bills/>
				</div>
			</div>
          </Pane>
          <Pane label="Tab 3">
            <div>This is my tab 3 contents!</div>
          </Pane>
        </Tabs>
        </div>
      </div>
    );
  }
}

export default App3;
