import React from "react";

import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({
  description = "Secret",
  amount = 0,
  createdAt = 0,
  id,
  dispatch
}) => (
  <tr>
    <td>{description}</td>
    <td>{amount}</td>
    <td>{createdAt}</td>
    <td>
      <button
        onClick={e => {
          e.preventDefault();
          dispatch(removeExpense({ id }));
        }}
      >
        Delete Item
      </button>
    </td>
  </tr>
);

export default connect()(ExpenseListItem);
