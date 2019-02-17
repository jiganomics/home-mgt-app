import React from "react";
import Client from "../../components/api/Client";

class Payees extends React.Component {
  state = {
		  payees: []
  };

  constructor(props) {
    super(props);

      Client.getPayees(payees => {
        this.setState({
        	payees: payees
      });
    });
  }

  render() {
    const { payees } = this.state;

    const payeeRows = payees.map((payees, idx) => (
      <tr key={idx}>
        <td className="left aligned">{payees.name}</td>
        <td className="center aligned">{payees.bill ? 'true' : 'false'}</td>
      </tr>
    ));

    return (
      <div>
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th>Payee</th>
              <th>Bill</th>
            </tr>
          </thead>
          <tbody>
            {payeeRows}
          </tbody>
        </table>
        </div>
    );
  }
}

export default Payees;
