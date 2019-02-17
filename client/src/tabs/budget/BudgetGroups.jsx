import React from "react";

const BudgetGroups = ({groups}) => {
  const months = [
     "January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
  ];

   const rows = [];
   const budgetGroups = groups.map((group, idx) => {
     var groupHeaderClasses = "groupHeader " + ((group.type === "income") ? "groupIncomeColor" : "groupExpenseColor");
     var actualHeaderClasses = "actualHeader " + ((group.type === "income") ? "actualIncomeColor" : "actualExpenseColor");
     rows.push(<tr key={idx}>
	<td className={groupHeaderClasses}>{group.name}</td>
 		<td className="spacerColumn"></td>
    {
    	months.map((month, idx) => {
    		return [
    		    <td className="budgetHeader">Budget</td>,
    		    <td className={actualHeaderClasses}>Actual</td>,
    		    <td className="diffHeader">Diff</td>
    		];
    	})
    }
     </tr>)
 	});

    return rows;
}

export default BudgetGroups;
