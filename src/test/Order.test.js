import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import MockAdapter from "axios-mock-adapter"
import { screen, render, fireEvent, act, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Order from "../pages/Order"
import OrderModal from "../components/CreateOrderModal"

const URL = "/api/order";

describe("orders", () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    // describe("access to page without authentication", () => {
    //     it("should redirect to login if access orders without authentication", async () => {
    //         mock.onGet(URL).reply(401, { error: "unauthorized" });

    //         render(<Order />, { wrapper: BrowserRouter });

    //         await waitFor(() => expect(window.location.pathname).toBe("/account/login"));

    //     });
    // });

    describe("add order", () => {
        it("should appear add order modal", async () => {
            render(<Order />, { wrapper: BrowserRouter });
            fireEvent.click(screen.getByTestId("add-order"));
            expect(screen.getByTestId("modal")).toHaveStyle("display: block");
        });
    });


});
