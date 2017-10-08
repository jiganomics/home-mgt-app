import React, { Component } from 'react';
import Checkbook from "./Checkbook";
import Bills from "./Bills";
import Documents from "./Documents";
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

class App extends Component {
  render() {
    return (
      <div>
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
			<div>
				<div>
					<Bills/>
				</div>
			</div>
          </Pane>
          <Pane label="Tab 3">
            <div>This is my tab 3 contents test!</div>
          </Pane>
          <Pane label="Tab 4">
	          <div>
				<Checkbook/>
	          </div>
	        </Pane>
	          <Pane label="Tab 5">
	          <div>
				<Documents/>
	          </div>
	        </Pane>
        </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
