import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: ""
  };
  onInputChange = e => {
    switch (e.target.name) {
      case "description":
      case "note":
        return this.setState({ [e.target.name]: e.target.value });
      case "amount":
        if (e.target.value.match(/^\d*(\.\d{0,2})?$/)) {
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
  render() {
    return (
      <div>
        <form>
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
          <textarea
            name="note"
            placeholder="Add a note for your expense (optional)"
            cols="30"
            rows="10"
            value={this.state.note}
            onChange={this.onInputChange}
          />
          <button
            onClick={e => {
              e.preventDefault();
              this.props.dispatch(addExpense(this.state));
              this.clearInputs();
            }}
          >
            Add Expense
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(ExpenseForm);
