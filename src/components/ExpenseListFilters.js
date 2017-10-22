import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFIlters extends Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = calendarFocused => this.setState({ calendarFocused });
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          placeholder="Search"
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            console.log(e.target.value);
            switch (e.target.value) {
              case "date":
                return this.props.dispatch(sortByDate());
              case "amount":
                return this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={calendarFocused => this.setState({ calendarFocused })}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFIlters);
