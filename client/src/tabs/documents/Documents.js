import React from "react";
import Client from "../../components/api/Client";

class Documents extends React.Component {
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
        <td>{trans.raw.number}</td>
        <td className="right aligned">{trans.date}</td>
        <td className="left aligned">{trans.payee}</td>
        <td className="right aligned">{trans.status}</td>
        <td className="right aligned">{trans.raw.debit}</td>
        <td className="right aligned">{trans.raw.credit}</td>
        <td className="right aligned">{trans.balance}</td>
      </tr>
    ));

    return (
      <div>
        <a href="#">Add</a>
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

export default Documents;
