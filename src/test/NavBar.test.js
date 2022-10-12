import { BrowserRouter } from "react-router-dom";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../components/NavBar"

describe("navigation bar", () => {
    it("should have correct links", async () => {
        render(<Navbar />, { wrapper: BrowserRouter });
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Dashboard")).toBeInTheDocument();
        expect(screen.getByText("Orders")).toBeInTheDocument();
        expect(screen.getByText("Inventory")).toBeInTheDocument();
        expect(screen.getByText("Suppliers")).toBeInTheDocument();
        expect(screen.getByText("Account")).toBeInTheDocument();
    });

    it("should navigate to correct page", async () => {
        render(<Navbar />, { wrapper: BrowserRouter });
        fireEvent.click(screen.getByText("Home"));
        expect(window.location.pathname).toBe("/");
        fireEvent.click(screen.getByText("Dashboard"));
        expect(window.location.pathname).toBe("/dashboard");
        fireEvent.click(screen.getByText("Orders"));
        expect(window.location.pathname).toBe("/order");
        fireEvent.click(screen.getByText("Inventory"));
        expect(window.location.pathname).toBe("/inventory");
        fireEvent.click(screen.getByText("Suppliers"));
        expect(window.location.pathname).toBe("/supplier");
        fireEvent.click(screen.getByText("Login"));
        expect(window.location.pathname).toBe("/account/login");
        fireEvent.click(screen.getByText("Signup"));
        expect(window.location.pathname).toBe("/account/register");
    });


});
