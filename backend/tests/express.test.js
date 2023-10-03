test("Search URL works (is Code 200)", async () => {
  const response = await fetch("http://localhost:3001/search");
  expect(response.status).toBe(200);
});
