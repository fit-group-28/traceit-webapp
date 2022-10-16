import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import MockAdapter from "axios-mock-adapter"
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Inventory from "../pages/Inventory"

describe("inventory", () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe("switch mode (edit/read)", () => {
        it("should switch to edit page", async () => {
            render(<Inventory />, { wrapper: BrowserRouter });
            fireEvent.click(screen.getByTestId("switch"));
            expect(screen.getByTestId("switch")).toHaveTextContent("Save");
        });
    });

    describe("search bar", () => {
        it("should display search bar", async () => {
            render(<Inventory />, { wrapper: BrowserRouter });
            expect(screen.getByTestId("search-bar")).toBeInTheDocument();
        });
    });

});