import React from "react";
import Client from "../../components/api/Client";

class Due extends React.Component {
  state = {
      bills: []
  };

  constructor(props) {
    super(props);

      Client.getBills(bills => {
        this.setState({
        	bills: bills.sort((a, b) => {
        		return b.date < a.date
        	})
      });
    });
  }

  render() {
    const { bills } = this.state;

    const billRows = bills.map((bills, idx) => (
      <tr key={idx} onClick={() => this.props.onBillClick(bills)}>
        <td className="left aligned">{bills.payee}</td>
        <td className="left aligned">{bills.date}</td>
        <td className="left aligned">{bills.dueDate}</td>
        <td className="right aligned">{bills.balance}</td>
        <td className="right aligned">{bills.amountDue}</td>
      </tr>
    ));

    return (
      <div>
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th>Payee</th>
              <th>Date</th>
              <th>Due Date</th>
              <th>Balance</th>
              <th>Amount Due</th>
            </tr>
          </thead>
          <tbody>
            {billRows}
          </tbody>
        </table>
        </div>
    );
  }
}

export default Due;
