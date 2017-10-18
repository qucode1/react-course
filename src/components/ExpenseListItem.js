import React from "react";

const ExpenseListItem = ({
  description = "Secret",
  amount = 0,
  createdAt = 0
}) => (
  <tr>
    <td>{description}</td>
    <td>{amount}</td>
    <td>{createdAt}</td>
  </tr>
);

export default ExpenseListItem;
