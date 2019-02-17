import React, { Component } from "react";
import Client from "../../components/api/Client";
//import DataTable from "react-editable-table";
//Modal = (require, 'react-modal').default
//var DataTable = require('react-editable-table').DataTable;

class Groups extends Component {
  state = {
		  groups: []
  };

  constructor(props) {
    super(props);

      Client.getBudgetGroups(groups => {
        this.setState({
        	groups: groups
      });
    });
  }

  render() {
    const { groups } = this.state;

//    const columns = [
//       { title: 'Site', prop: 'site'  },
//       { title: 'Country', prop: 'country' },
//       { title: 'Domain', prop: 'domain', validation: /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/ },
//       { title: 'Phone', prop: 'phone', editable: false }
//     ];
      
//    const data = [
//       { site: 'google', country: 'USA', domain: 'google.com', phone: 'phone value' }
//       // It also supports arrays 
//       // [ 'name value', 'city value', 'address value', 'phone value' ] 
//     ];

    const groupRows = groups.map((groups, idx) => (
      <tr key={idx}>
        <td className="left aligned">{groups.name}</td>
        <td className="center aligned">{groups.bill ? 'true' : 'false'}</td>
      </tr>
    ));

    return (
    		/*
      [<DataTable
      className="container"
      keys={[ 'site' ]}
      columns={columns}
      initialData={data}
      initialPageLength={5}
      initialSortBy={{ prop: 'site', order: 'desc' }}
      pageLengthOptions={[ 5, 20, 50 ]}
    />]
 */

      <div>
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th>Payee</th>
              <th>Bill</th>
            </tr>
          </thead>
          <tbody>
            {groupRows}
          </tbody>
        </table>
        </div>
    );
  }
}

export default Groups;
