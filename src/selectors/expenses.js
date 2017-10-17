// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
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
