import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders h1 in header", () => {
  render(<App />);
  const h1 = screen.getByText("iTunes Search Application");
  expect(h1).toBeInTheDocument();
});
