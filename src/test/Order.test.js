import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import MockAdapter from "axios-mock-adapter"
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Order from "../pages/Order"

const URL_ORDER = "/api/order";
const URL_PRODUCT = "/api/product";

describe("orders", () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });


    describe("add order", () => {
        it("should appear add order modal", async () => {
            render(<Order />, { wrapper: BrowserRouter });
            fireEvent.click(screen.getByTestId("add-order"));
            expect(screen.getByTestId("modal")).toHaveStyle("display: block");
        });

        it("modal should have prodcts", async () => {
            mock.onGet(URL_PRODUCT).reply(200, { data: { products: [{ id: 1, name: "product1" }, { id: 2, name: "product2" }] } });
            render(<Order />, { wrapper: BrowserRouter });
            fireEvent.click(screen.getByTestId("add-order"));
            await new Promise(resolve => setTimeout(resolve, 1000));
            expect(screen.getByTestId("name-0")).toHaveTextContent("product1");
            expect(screen.getByTestId("name-1")).toHaveTextContent("product2");
        });

        it("should add order", async () => {
            // mock get products
            mock.onGet(URL_PRODUCT).reply(200, { data: { products: [{ product_id: 1, name: "product1" }, { product_id: 2, name: "product2" }] } });
            // mock add order
            const mockResponse = {
                data: {
                    orders: [
                        {
                            "date_placed": "Fri, 14 Oct 2022 00:00:00 GMT",
                            "order_id": 1,
                            "order_status": "placed",
                            "products": [
                                {
                                    "product": {
                                        "name": "product1",
                                    },
                                    "quantity": 1
                                },
                                {
                                    "product": {
                                        "name": "product2",
                                    },
                                    "quantity": 5
                                },
                            ]
                        }
                    ]
                }
            }
            mock.onPost(URL_ORDER).reply(200, mockResponse);
            render(<Order />, { wrapper: BrowserRouter });
            fireEvent.click(screen.getByTestId("add-order"));
            await new Promise(resolve => setTimeout(resolve, 1000));
            fireEvent.change(screen.getByTestId("qty-0"), { target: { value: 9 } });
            fireEvent.change(screen.getByTestId("qty-1"), { target: { value: 10 } });
            fireEvent.click(screen.getByTestId("save-btn"));
            await new Promise(resolve => setTimeout(resolve, 1000));
            expect(screen.getByTestId("order-0")).toBeInTheDocument();
        });



    });

    describe("switch order page (active/history)", () => {
        it("should switch to history page", async () => {
            render(<Order />, { wrapper: BrowserRouter });
            fireEvent.click(screen.getByTestId("switch"));
            expect(screen.getByTestId("switch")).toHaveTextContent("Active");
        });
    });


});
