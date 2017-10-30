import moment from "moment";

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch = startDate
        ? moment(expense.createdAt * 1000).isSameOrAfter(startDate, "day")
        : true;
      const endDateMatch = endDate
        ? moment(expense.createdAt * 1000).isSameOrBefore(endDate, "day")
        : true;
      const textMatch = () => {
        const lowerText = text.toLowerCase();
        const description = expense.description
          .toLowerCase()
          .includes(lowerText);
        const note = expense.note.toLowerCase().includes(lowerText);
        return description || note;
      };

      return startDateMatch && endDateMatch && textMatch();
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
