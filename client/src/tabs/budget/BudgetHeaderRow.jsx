import React from "react";

const BudgetHeaderRow = () => {
  const months = [
     "January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
  ];

    return (
	  <tr>
	    <td></td><td></td>
	    {
	      months.map((month, idx) => (
	        	<td align="center" colSpan={3}><b>{month}</b></td>
	      ))
		}
	  </tr>
    );
}

export default BudgetHeaderRow;
