import React, { Component } from "react";
import Pager from "react-pager";
import Client from "../../components/api/Client";
import store from "../../store";

//import "./checkbook.css";

class Checkbook extends Component {

  constructor(props) {
    super(props);

	console.log("Checkbook constructor");

      Client.getTransactions(transactions => {
    	  console.log("count: " + transactions.length);
    	  store.dispatch({
    	  	type: 'SET_CHECKBOOK_DATA',
    	  	transactions: transactions.sort((a, b) => {
			    	var a1 = a.date.split("/").map(Number);
			    	var b1 = b.date.split("/").map(Number);
		
			    	// Format: M/D/YYYY
			    	if(a1[2] !== b1[2]) return a1[2] - b1[2];
			    	else if(a1[0] !== b1[0]) return a1[0] - b1[0];
		
			    	return a1[1] - b1[1]
		    	})
    	  });
      });
  }

	handlePageChanged(newPage) {
	  	store.dispatch({type:'CB_CURRENT_PAGE', currentPage : newPage});
	}

  render() {
	const {
		transactions,
		startIndex,
		endIndex,
		totalPages,
		currentPage,
		visiblePages
	} = store.getState().checkbook;

    const transRows = transactions.slice(startIndex, endIndex).map((trans, idx) => (
      <tr key={idx}>
        <td className="right aligned">{trans.type}</td>
        <td>{trans.raw.number}</td>
        <td className="right aligned">{trans.date}</td>
        <td className="left aligned">{trans.payee}</td>
        <td className="left aligned">{trans.category}</td>
        <td className="right aligned">{trans.status}</td>
        <td className="right aligned">{trans.raw.debit}</td>
        <td className="right aligned">{trans.raw.credit}</td>
        <td className="right aligned">{trans.balance}</td>
      </tr>
    ));

    return (
      <div>
      <section className="">
      <div className="container">
        <table>
          <thead>
            <tr className="header">
              <th><div>Type</div></th>
              <th><div>Num</div></th>
              <th><div>Date</div></th>
              <th><div>Payee</div></th>
              <th><div>Category</div></th>
              <th><div>C</div></th>
              <th><div>Payment</div></th>
              <th><div>Deposit</div></th>
              <th><div>Balance</div></th>
            </tr>
          </thead>
          <tbody>
            {transRows}
          </tbody>
        </table>
        </div>
        </section>
      	<Pager
            total={totalPages}
            current={currentPage}
            visiblePages={visiblePages}
            titles={{ first: '<|', last: '>|' }}
            className="pagination-sm pull-right"
            onPageChanged={this.handlePageChanged}
        />
      </div>
    );
  }
}

export default Checkbook;
