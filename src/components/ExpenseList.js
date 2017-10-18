import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {props.expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
