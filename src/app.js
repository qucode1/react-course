// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

// Styles
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// Components, Functions, ...
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

// Variables
const store = configureStore();

store.subscribe(() => console.log(store.getState()));

store.dispatch(addExpense({ description: "Water bill", amount: 2000 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 1000 }));
store.dispatch(setTextFilter("Bill"));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
