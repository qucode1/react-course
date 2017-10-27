import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

// removeExpense
test("should setup removeExpense action obj", () => {
  const action = removeExpense({ id: "123abc" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

// editExpense
test("should set up editExpense action obj", () => {
  const updates = {
    description: "some bill",
    amount: "1003",
    createdAt: "10500",
    note: "edited note"
  };
  const action = editExpense("123abc", updates);

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates
  });
});

//addExpense
test("should set up the addExpense action obj", () => {
  const expense = {
    description: "some expense",
    amount: "1005",
    createdAt: "10600",
    note: "new note"
  };
  const action = addExpense(expense);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});
// addExpense - default values
test("should set up the addExpense action obj", () => {
  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
