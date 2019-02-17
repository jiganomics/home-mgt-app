import React, { Component } from 'react';
import Client from "../../components/api/Client";

class Accounts extends Component {
  state = {
      accounts: []
  };

  constructor(props) {
    super(props);

      Client.getAccounts(accounts => {
        this.setState({
        	accounts: accounts.slice(0, 100)
	});
      });
  }

  render() {
    const { accounts } = this.state;

    const accountRows = accounts.map((accounts, idx) => (
      <tr key={idx} onClick={() => this.props.onFoodClick(accounts)}>
        <td className="left aligned"><a href="">{accounts.accountId}</a></td>
        <td className="left aligned">{accounts.financialInstitution}</td>
        <td className="left aligned">{accounts.type}</td>
        <td className="left aligned">{accounts.name}</td>
      </tr>
    ));

    return (
      <div id="food-search">
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th>Account ID</th>
              <th>Financial Institution</th>
              <th>Type</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {accountRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Accounts;
