import React from "react";
import { connect } from "react-redux";

import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";

const ExpenseListFIlters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      placeholder="Search"
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={e => {
        console.log(e.target.value);
        switch (e.target.value) {
          case "date":
            return props.dispatch(sortByDate());
          case "amount":
            return props.dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFIlters);
