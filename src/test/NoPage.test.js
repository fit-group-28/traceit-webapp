import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NoPage from "../pages/NoPage"


describe("Error page", () => {
    it("should display not found info", async () => {
        render(<NoPage />, { wrapper: BrowserRouter });
        expect(screen.getByText("Page not found")).toBeInTheDocument();

    });
});

