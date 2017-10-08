import React, { Component } from 'react';
import Checkbook from "./Checkbook";
import Bills from "./Bills";
import Documents from "./Documents";
import Due from "./Due";
import './App.css';
import './tab.css';
import './fixed-data-table.css';
import Tabs from './tabs';
import Pane from './pane';
import {Table, Column, Cell} from 'fixed-data-table';

class App extends Component {
  render() {
    return (
    	<div>
    		<div>
    			<Tabs selected={0}>
    				<Pane label="Bills">
    					<div>
    						<Bills />
    					</div>
    				</Pane>
    				<Pane label="Checkbook">
    					<div>
    						<Checkbook />
    					</div>
    				</Pane>
    				<Pane label="Documents">
    					<div>
    						<Documents />
    					</div>
    				</Pane>
    				<Pane label="Due">
						<div>
							<Due />
						</div>
				</Pane>
    			</Tabs>
    		</div>
    	</div>
    );
  }
}

export default App;
