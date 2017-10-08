import React from "react";
import Client from "./Client";

class Notifications extends React.Component {
  state = {
      transactions: []
  };

  constructor(props) {
    super(props);

      Client.getTransactions(transactions => {
        this.setState({
	    transactions: transactions.slice(0, 100)
	});
      });
  }

  render() {
    const { transactions } = this.state;

    const transRows = transactions.map((trans, idx) => (
      <tr key={idx} onClick={() => this.props.onFoodClick(trans)}>
        <td>{trans.qif.number}</td>
        <td className="right aligned">{trans.qif.date}</td>
        <td className="left aligned">{trans.qif ? trans.qif.payee : ''}</td>
        <td className="right aligned">{trans.qif.status}</td>
        <td className="right aligned">{trans.qif.amount}</td>
        <td className="right aligned">{trans.qif.deposit}</td>
        <td className="right aligned">{trans.qif.balance}</td>
      </tr>
    ));

    return (
      <div id="food-search">
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th>Num</th>
              <th>Date</th>
              <th className="eight wide">Payee</th>
              <th>C</th>
              <th>Payment</th>
              <th>Deposit</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Notifications;
