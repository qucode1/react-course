import moment from "moment";

import {
  setStartDate,
  setEndDate,
  sortByAmount,
  setTextFilter,
  sortByDate
} from "../../actions/filters";

// startDate
test("should generate setStartDate action obj", () => {
  const date = moment();
  const action = setStartDate(date);
  expect(action).toEqual({
    type: "SET_START_DATE",
    date
  });
});
// startDate -  default values
test("should generate setStartDate action obj with undefined date", () => {
  const action = setStartDate();
  expect(action).toEqual({
    type: "SET_START_DATE",
    date: undefined
  });
});

// endDate
test("should generate setStartDate action obj", () => {
  const date = moment();
  const action = setEndDate(date);
  expect(action).toEqual({
    type: "SET_END_DATE",
    date
  });
});
// endDate - default values
test("should generate setStartDate action obj with undefined date", () => {
  const action = setEndDate();
  expect(action).toEqual({
    type: "SET_END_DATE",
    date: undefined
  });
});

// setTextFilter
test("should generate setTextFilter action obj", () => {
  const text = "text filter";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});
// setTextFilter - default
test("should generate setTextFilter action obj with empty text", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

// sortByAmount
test("should generate sortByAmount action obj", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

// sortByDate
test("should generate sortByDate action obj", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE"
  });
});
