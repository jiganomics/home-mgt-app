import React, { Component } from 'react';
import { Tab, Row, Col, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Accounts from '../../tabs/banking/Accounts';
import Checkbook from "../../tabs/checking/Checkbook";
import Bills from "../../tabs/bills/Bills";
import Budget from "../../tabs/budget/Budget";
import Documents from "../../tabs/documents/Documents";
import Records from "../../tabs/records/Records";
import Due from "../../tabs/due/Due";
import Payees from "../../tabs/payees/Payees";
import Groups from "../../tabs/groups/Groups";

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

  loadCheckbook(event) {
	  //alert("select");
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
			<Tab.Container id="tabs-with-dropdown" defaultActiveKey="home">
				<Row className="clearfix">
					<Col sm={12}>
						<Nav bsStyle="tabs">
							<NavItem eventKey="home">Home</NavItem>
							<NavItem eventKey="banking">Banking</NavItem>
							<NavItem eventKey="bills">Bills</NavItem>
							<NavItem eventKey="checking" onSelect={this.loadCheckbook}>Checking</NavItem>
							<NavItem eventKey="budget">Budget</NavItem>
							<NavItem eventKey="statements">Statements</NavItem>
							<NavItem eventKey="documents">Documents</NavItem>
							<NavItem eventKey="records">Records</NavItem>
							<NavItem eventKey="due">Due</NavItem>
							<NavItem eventKey="payees">Payees</NavItem>
							<NavItem eventKey="groups">Groups</NavItem>
							<NavDropdown eventKey="3" title="Dropdown" id="nav-dropdown-within-tab">
								<MenuItem eventKey="3.1">Action</MenuItem>
								<MenuItem eventKey="3.2">Another action</MenuItem>
								<MenuItem eventKey="3.3">Something else here</MenuItem>
								<MenuItem divider />
								<MenuItem eventKey="3.4">Separated link</MenuItem>
							</NavDropdown>
						</Nav>
					</Col>
					<Col sm={12}>
						<Tab.Content animation>
							<Tab.Pane eventKey="home">
								<div>
									<div>
										<a onClick={this.handleTabSelect.bind(this, 1)}>Account List</a>
									</div>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="banking"><div><Accounts /></div></Tab.Pane>
							<Tab.Pane eventKey="bills"><div><Bills /></div></Tab.Pane>
							<Tab.Pane eventKey="checking"><div><Checkbook /></div></Tab.Pane>
							<Tab.Pane eventKey="budget"><div><Budget /></div></Tab.Pane>
							<Tab.Pane eventKey="statements"></Tab.Pane>
							<Tab.Pane eventKey="documents"><div><Documents /></div></Tab.Pane>
							<Tab.Pane eventKey="records"><div><Records /></div></Tab.Pane>
							<Tab.Pane eventKey="due"><div><Due /></div></Tab.Pane>
							<Tab.Pane eventKey="payees"><div><Payees /></div></Tab.Pane>
							<Tab.Pane eventKey="groups"><div><Groups /></div></Tab.Pane>
							<Tab.Pane eventKey="3.1"><div>Tab 3.1 content</div></Tab.Pane>
							<Tab.Pane eventKey="3.2">Tab 3.2 content</Tab.Pane>
							<Tab.Pane eventKey="3.3">Tab 3.3 content</Tab.Pane>
							<Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
    	</div>
    );
  }
}

export default Dashboard;
