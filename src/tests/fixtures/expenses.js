import moment from "moment";

export default [
  {
    description: "expense 1",
    note: "note 1",
    amount: "1001",
    id: "1",
    createdAt: moment([2000]).unix()
  },
  {
    description: "expense 2",
    note: "note 2",
    amount: "1002",
    id: "2",
    createdAt: "1002"
  },
  {
    description: "expense 3",
    note: "note 3 test",
    amount: "1003",
    id: "3",
    createdAt: moment([2000])
      .subtract(3, "months")
      .unix()
  },
  {
    description: "expense 4 test",
    note: "note 4",
    amount: "1004",
    id: "4",
    createdAt: "1004"
  }
];
