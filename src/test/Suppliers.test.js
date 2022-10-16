import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import MockAdapter from "axios-mock-adapter"
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Supplier from "../pages/Supplier"

describe("suppliers", () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe("Map rendering", () => {
        it("should render a map", async () => {
            render(<Supplier />, { wrapper: BrowserRouter });
            expect(screen.getByTestId("map")).toBeInTheDocument();
        });

        it("should display info window", async () => {
            const mockResponse = {
                data: {
                    suppliers: [
                        { address: '359 Clayton Rd, Clayton VIC 3168, Australia', latitude: 145.0591381, longitude: -37.9213647, name: "One's Grocery shop", "phone_number": 12345678, "supplier_id": 1 },
                        { address: '359 Clayton Rd, Clayton VIC 3168, Australia', latitude: 145.0591381, longitude: -37.9213647, name: "One's Grocery shop", "phone_number": 12345678, "supplier_id": 2 },
                        { address: '359 Clayton Rd, Clayton VIC 3168, Australia', latitude: 145.0591381, longitude: -37.9213647, name: "One's Grocery shop", "phone_number": 12345678, "supplier_id": 3 }
                    ]
                }
            }

            mock.onGet("/api/supplier").reply(200, mockResponse);
            render(<Supplier />, { wrapper: BrowserRouter });
            await new Promise(resolve => setTimeout(resolve, 1000));
            fireEvent.click(screen.getByTestId("marker-0"));
            expect(screen.getByTestId("info-window")).toBeInTheDocument();
        });

    });



});