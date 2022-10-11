import { render, screen } from "@testing-library/react";
import Supplier from "./supplier";

test("renders the supplier page", () => {
  render(<Supplier />);
  // expect(screen.getByRole("feedback-search")).toHaveAccessibleDescription();
  // expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  // expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
  // expect(screen.getByRole("img")).toBeInTheDocument();
});