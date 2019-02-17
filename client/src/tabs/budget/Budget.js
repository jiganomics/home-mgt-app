import React from "react";
import Client from "../../components/api/Client";
import BudgetHeaderRow from "./BudgetHeaderRow";
//import BudgetGroups from "./BudgetGroups";
import "./budget.css";

class Budget extends React.Component {
  state = {
      groups: []
  };

  constructor(props) {
    super(props);

      Client.getBudgetData(budgetGroups => {
        this.setState({
        	groups: budgetGroups.sort((a, b) => {
        		if(a.type !== b.type) return b.type === 'income' ? 1 : -1;
        		return a.order - b.order
        	})
        });
      });
  }

  render() {
    const { groups } = this.state;
    const months = [
	     "January", "February", "March", "April", "May", "June",
	     "July", "August", "September", "October", "November", "December"
   ];

//    const monthHeaders = months.map((month, idx) => (
//    	<td align="center" colSpan={3}><b>{month}</b></td>
//    ));

    const budgetGroups = groups.map((group, idx) => {
      var groupHeaderClasses = "groupHeader " + ((group.type === "income") ? "groupIncomeColor" : "groupExpenseColor");
      var actualHeaderClasses = "actualHeader " + ((group.type === "income") ? "actualIncomeColor" : "actualExpenseColor");
      var groupHeader = (<tr key={idx}>
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
      </tr>);
      return [groupHeader, group.categories.map((category, idx) => {
          return (<tr key={idx}>
          	<td>{category.name}</td>
      		<td className="spacerColumn"></td>
      		{
    	    	months.map((month, idx) => {
    	    		return [
    	    		    <td>{category.data[idx].budget}</td>,
    	    		    <td>{category.data[idx].actual}</td>,
    	    		    <td>{category.data[idx].diff}</td>
    	    		];
    	    	})
      		}
          </tr>)
      })]
  	});

    return (
      <div class="budget">
	  	<table frame="void" align="left" cellspacing="0" cols="53" rules="none" border="0">
		  <colgroup><col width="165"/><col width="13"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="13"/><col width="59"/><col width="56"/><col width="56"/></colgroup>
   		  <tbody className="mbody">
			  <BudgetHeaderRow />
			  {budgetGroups}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Budget;
