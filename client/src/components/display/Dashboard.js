import React, { Component } from 'react';
import Accounts from '../../tabs/banking/Accounts';
import Checkbook from "../../tabs/checking/Checkbook";
import Bills from "../../tabs/bills/Bills";
import Budget from "../../tabs/budget/Budget";
import Due from "../../tabs/due/Due";
import Payees from "../../tabs/payees/Payees";
import Groups from "../../tabs/groups/Groups";
import Documents from "../../tabs/documents/Documents";
import Records from "../../tabs/records/Records";
import '../../App.css';
import '../../tab.css';
import '../../table2.css';
//import '../../budget.css';
import Tabs from '../../tabs';
import Pane from '../../pane';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.handleTabSelect = this.handleTabSelect.bind(this);
  }

  handleTabSelect(index) {
    this.setState({
      tabIndex: index
    });
  }

  fileUpload(evt) {
    var file = document.getElementById("statement").files[0];
    if (file) {
        //  getAsText(file);
        //alert("Name: " + file.name + "\n" + "Last Modified Date :" + file.lastModifiedDate);
    }
  }

  render() {
    return (
    	<div>
			<Tabs selected={this.state.tabIndex} onSelect={this.handleTabSelect}>
				<Pane label="Home">
					<div>
						<div>
							<a onClick={this.handleTabSelect.bind(this, 1)}>Account List</a>
						</div>
					</div>
				</Pane>
				<Pane label="Banking">
					<div>
						<div>
							<a>Add a new account</a>
						</div>
						<Accounts />
					</div>
				</Pane>
				<Pane label="Bills">
					<div>
						<Bills />
					</div>
				</Pane>
				<Pane label="Checkbook">
					<div>
						<div>
							<a>Statements</a>
						</div>
						<Checkbook />
					</div>
				</Pane>
				<Pane label="Budget">
					<div>
						<Budget />
					</div>
				</Pane>
				<Pane label="Statements">
					<div>
						<input type="file" id="statement" onChange={this.fileUpload.bind(this)}/>
					</div>
				</Pane>
				<Pane label="Documents">
					<div>
						<Documents />
					</div>
				</Pane>
				<Pane label="Records">
					<div>
						<Records />
					</div>
				</Pane>
				<Pane label="Due">
					<div>
						<Due />
					</div>
				</Pane>
				<Pane label="Payees">
					<div>
						<Payees />
					</div>
				</Pane>
				<Pane label="Groups">
					<div>
						<Groups />
					</div>
				</Pane>
			</Tabs>
    	</div>
    );
  }
}

export default Dashboard;
