const add = (a, b) => a + b;
const addGreeting = (name = "Anonymous") => `Hello ${name}!`;
test("should add two numbers", () => {
  const result = add(3, 4);

  expect(result).toBe(7);

  //   if (result !== 7) {
  //     throw new Error(
  //       `You added 3 and 4. The result was ${result} - should be 7`
  //     );
  //   }
});

test("should greet provided name", () => {
  const result = addGreeting("Tom");
  expect(result).toBe("Hello Tom!");
});

test("should greet Anonymous", () => {
  const result = addGreeting();
  expect(result).toBe("Hello Anonymous!");
});
