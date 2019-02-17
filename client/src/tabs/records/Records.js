import React from "react";
import Client from "../../components/api/Client";

class Records extends React.Component {
  state = {
      records: []
  };

  constructor(props) {
    super(props);

      Client.getRecords(records => {
        this.setState({
		    records: records.slice(0, 100)
		});
      });
  }

  render() {
    const { records } = this.state;

    const recordRows = records.map((rec, idx) => (
      <tr key={idx} onClick={() => this.props.onFoodClick(rec)}>
        <td>{rec.filename}</td>
        <td className="right aligned">{rec.filename}</td>
        <td className="left aligned">{rec.filename}</td>
        <td className="right aligned">{rec.filename}</td>
        <td className="right aligned">{rec.filename}</td>
        <td className="right aligned">{rec.filename}</td>
        <td className="right aligned">{rec.filename}</td>
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
            {recordRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Records;
