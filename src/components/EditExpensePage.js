import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { editExpense, removeExpense } from "../actions/expenses";

import ExpenseForm from "./ExpenseForm";

const EditExpensePage = props => (
  <div>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push("/");
      }}
      expense={props.expense}
    />
    <button
      onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push("/");
      }}
    >
      Delete Item
    </button>
  </div>
);

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);
