import React from "react";
import Client from "../../components/api/Client";

class Bills extends React.Component {
  state = {
      bills: []
  };

  constructor(props) {
    super(props);

      Client.getBills(bills => {
        this.setState({
        	bills: bills.slice(0, 100)
	});
      });
  }

  render() {
    const { bills } = this.state;

    const billRows = bills.map((bills, idx) => (
      <tr key={idx} onClick={() => this.props.onFoodClick(bills)}>
        <td className="left aligned">{bills.payee}</td>
        <td className="left aligned">{bills.january}</td>
        <td className="left aligned">{bills.february}</td>
        <td className="left aligned">{bills.march}</td>
        <td className="left aligned">{bills.april}</td>
        <td className="left aligned">{bills.may}</td>
        <td className="left aligned">{bills.june}</td>
        <td className="left aligned">{bills.july}</td>
        <td className="left aligned">{bills.august}</td>
        <td className="left aligned">{bills.september}</td>
        <td className="left aligned">{bills.october}</td>
        <td className="left aligned">{bills.november}</td>
        <td className="left aligned">{bills.december}</td>
      </tr>
    ));

    return (
      <div id="food-search">
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th>Payee</th>
              <th>January</th>
              <th>February</th>
              <th>March</th>
              <th>April</th>
              <th>May</th>
              <th>June</th>
              <th>July</th>
              <th>August</th>
              <th>September</th>
              <th>October</th>
              <th>November</th>
              <th>December</th>
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

export default Bills;
