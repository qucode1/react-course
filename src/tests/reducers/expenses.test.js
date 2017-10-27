import expensesReducer from "../../reducers/expenses";

// default
test("should return empty Array", () => {
  const action = expensesReducer([], { type: "@@INIT" });
  expect(action).toEqual([]);
});

// ADD_EXPENSE
test("should add expense that is passed in 2nd argument to oldState passed in 1st arg", () => {
  const oldState = [
    {
      description: "some other expense",
      note: "some other note",
      amount: "999",
      createdAt: "999"
    }
  ];
  const expense = {
    description: "some expense",
    note: "some note",
    amount: "1000",
    createdAt: "1000"
  };
  const action = expensesReducer(oldState, { type: "ADD_EXPENSE", expense });
  expect(action).toEqual([...oldState, expense]);
});

// EDIT_EXPENSE
test("should update oldState with updates of matching id", () => {
  const oldState = [
    {
      description: "some other expense",
      id: "123abc",
      note: "some other note",
      amount: "999",
      createdAt: "999"
    },
    {
      description: "some expense",
      id: "321cba",
      note: "some note",
      amount: "1000",
      createdAt: "1000"
    }
  ];
  const updates = {
    description: "edited expense",
    note: "I have been edited",
    amount: "990",
    createdAt: "995"
  };
  const action = expensesReducer(oldState, {
    id: "123abc",
    updates: updates,
    type: "EDIT_EXPENSE"
  });
  expect(action).toEqual([{ ...oldState[0], ...updates }, oldState[1]]);
});
// EDIT_EXPENSE no matching id
test("should return oldState without changes", () => {
  const oldState = [
    {
      description: "some other expense",
      id: "123abc",
      note: "some other note",
      amount: "999",
      createdAt: "999"
    },
    {
      description: "some expense",
      id: "321cba",
      note: "some note",
      amount: "1000",
      createdAt: "1000"
    }
  ];
  const updates = {
    description: "edited expense",
    note: "I have been edited",
    amount: "990",
    createdAt: "995"
  };
  const action = expensesReducer(oldState, {
    id: "456abc",
    updates: updates,
    type: "EDIT_EXPENSE"
  });
  expect(action).toEqual(oldState);
});

// REMOVE_EXPENSE
test("should remove expense with matching id from oldState", () => {
  const oldState = [
    {
      description: "some other expense",
      id: "123abc",
      note: "some other note",
      amount: "999",
      createdAt: "999"
    },
    {
      description: "some expense",
      id: "321cba",
      note: "some note",
      amount: "1000",
      createdAt: "1000"
    }
  ];
  const action = expensesReducer(oldState, {
    id: "123abc",
    type: "REMOVE_EXPENSE"
  });
  expect(action).toEqual([oldState[1]]);
});
// REMOVE_EXPENSE no match
test("should return oldState without changes", () => {
  const oldState = [
    {
      description: "some other expense",
      id: "123abc",
      note: "some other note",
      amount: "999",
      createdAt: "999"
    },
    {
      description: "some expense",
      id: "321cba",
      note: "some note",
      amount: "1000",
      createdAt: "1000"
    }
  ];
  const action = expensesReducer(oldState, {
    id: "456abc",
    type: "REMOVE_EXPENSE"
  });
  expect(action).toEqual(oldState);
});
