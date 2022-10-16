import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Profile from "../pages/Profile"


describe("Profile page", () => {
    it("should display profile info", async () => {
        render(<Profile />, { wrapper: BrowserRouter });

        expect(screen.getByText("UID")).toBeInTheDocument();
        expect(screen.getByText("Username")).toBeInTheDocument();
        expect(screen.getByText("Email")).toBeInTheDocument();
    });

    it("should display greetings", async () => {
        render(<Profile />, { wrapper: BrowserRouter });
        expect(screen.getByText("Hello")).toBeInTheDocument();
    });

});

