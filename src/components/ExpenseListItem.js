import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseListItem = ({
  description = "New Item",
  amount = 0,
  createdAt = 0,
  id
}) => (
  <tr>
    <td>{description}</td>
    <td>{amount}</td>
    <td>{moment(createdAt * 1000).format("MMM Do, YYYY")}</td>
    <td>
      <Link to={`/${id}/edit`}>Edit</Link>
    </td>
  </tr>
);

export default ExpenseListItem;
