import moment from "moment";

import filtersReducer from "../../reducers/filters";

// default action (on init)
test("should set up default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

// SORT_BY_DATE
test("should set sortBy to date", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

// SORT_BY_AMOUNT
test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

// SET_START_DATE
test("should set startDate to 1000", () => {
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    date: "1000"
  });
  expect(state.startDate).toBe("1000");
});

// SET_END_DATE
test("should set startDate to 1000", () => {
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    date: "1000"
  });
  expect(state.endDate).toBe("1000");
});

// SET_TEXT_FILTER with provided state
test("should set textFilter to test and accept provided state", () => {
  const currentState = {
    text: "bla",
    startDate: moment()
      .startOf("month")
      .subtract(1, "month"),
    endDate: moment()
      .endOf("month")
      .subtract(1, "month"),
    sortby: "amount"
  };
  const action = {
    type: "SET_TEXT_FILTER",
    text: "test"
  };
  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    ...currentState,
    text: "test"
  });
});
