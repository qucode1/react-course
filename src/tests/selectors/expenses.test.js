import moment from "moment";
import getVisibleExpenses from "../../selectors/expenses";

const expenses = [
  {
    description: "expense 1",
    note: "note 1",
    amount: "1001",
    createdAt: moment().unix()
  },
  {
    description: "expense 2",
    note: "note 2",
    amount: "1002",
    createdAt: "1002"
  },
  {
    description: "expense 3",
    note: "note 3 test",
    amount: "1003",
    createdAt: moment()
      .subtract(3, "months")
      .unix()
  },
  {
    description: "expense 4 test",
    note: "note 4",
    amount: "1004",
    createdAt: "1004"
  }
];

// sortByDate
test("should sort expenses by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const action = getVisibleExpenses(expenses, filters);

  expect(action).toEqual([expenses[0], expenses[2], expenses[3], expenses[1]]);
});

// sortByAmount
test("should sort expenses by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };

  const action = getVisibleExpenses(expenses, filters);

  expect(action).toEqual([expenses[3], expenses[2], expenses[1], expenses[0]]);
});

// filterByText
test("should filter expenses by text", () => {
  const filters = {
    text: "test",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };

  const action = getVisibleExpenses(expenses, filters);

  expect(action).toEqual([expenses[3], expenses[2]]);
});

// filterByDate - startDate
test("should filter expenses by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment().subtract(5, "months"),
    endDate: undefined
  };

  const action = getVisibleExpenses(expenses, filters);

  expect(action).toEqual([expenses[0], expenses[2]]);
});

// filterByDate - startDate with text filter
test("should filter expenses by startDate & text", () => {
  const filters = {
    text: "test",
    sortBy: "date",
    startDate: moment().subtract(5, "months"),
    endDate: undefined
  };

  const action = getVisibleExpenses(expenses, filters);

  expect(action).toEqual([expenses[2]]);
});

// filterByDate - startDate & endDate
test("should filter expenses by startDate & endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment().subtract(5, "months"),
    endDate: moment().subtract(1, "month")
  };

  const action = getVisibleExpenses(expenses, filters);

  expect(action).toEqual([expenses[2]]);
});
