import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
  state = {
    description: this.props.expense ? this.props.expense.description : "",
    note: this.props.expense ? this.props.expense.note : "",
    amount: this.props.expense ? this.props.expense.amount.toString() : "",
    createdAt: this.props.expense
      ? moment.unix(this.props.expense.createdAt)
      : moment(),
    calendarFocused: false,
    error: ""
  };
  onInputChange = e => {
    switch (e.target.name) {
      case "description":
      case "note":
        return this.setState({ [e.target.name]: e.target.value });
      case "amount":
        if (!e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          return this.setState({ [e.target.name]: e.target.value });
        }
        return;
    }
  };
  clearInputs = () => {
    this.setState({
      description: "",
      note: "",
      amount: ""
    });
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState({
        createdAt
      });
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!this.state.description || !this.state.amount) {
              this.setState({
                error: "Please add an expense description and an amount!"
              });
            } else {
              this.props.onSubmit({
                description: this.state.description,
                amount: this.state.amount,
                note: this.state.note,
                createdAt: this.state.createdAt.unix()
              });
            }
          }}
        >
          {this.state.error && <p>{this.state.error}</p>}
          <input
            name="description"
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onInputChange}
          />
          <input
            name="amount"
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onInputChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            name="note"
            placeholder="Add a note for your expense (optional)"
            cols="30"
            rows="10"
            value={this.state.note}
            onChange={this.onInputChange}
          />
          <button>{this.props.expense ? "Edit Expense" : "Add Expense"}</button>
        </form>
      </div>
    );
  }
}
