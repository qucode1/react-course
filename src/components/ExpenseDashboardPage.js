import React from "react";
import ReactDOM from "react-dom";

import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = props => (
  <div>
    <ExpenseListFilters />
    <ExpenseList history={props.history} />
  </div>
);

export default ExpenseDashboardPage;
