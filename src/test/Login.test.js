import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import MockAdapter from "axios-mock-adapter"
import { waitFor, screen, render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginForm from "../components/LoginForm"

describe("login", () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe("login success", () => {
        it("should save token to local storage", async () => {
            mock.onPost("/api/account/login").reply(200, { access_token: "token" });

            render(<LoginForm />, { wrapper: BrowserRouter });
            fireEvent.change(await screen.findByTestId("username"), { target: { value: "username" } });
            fireEvent.change(await screen.findByTestId("password"), { target: { value: "password" } });
            fireEvent.click(await screen.findByRole("button"));


            await new Promise(resolve => setTimeout(resolve, 0));
            expect(localStorage.getItem("user")).toBe("token");

        });
    });

    describe("login failure", () => {
        it("should display error message", async () => {
            await mock.onPost("/api/account/login").reply(401);

            render(<LoginForm />, { wrapper: BrowserRouter });

            fireEvent.change(screen.getByTestId("username"), { target: { value: "username" } });
            fireEvent.change(screen.getByTestId("password"), { target: { value: "password" } });
            fireEvent.click(screen.getByRole("button"));


            await new Promise(resolve => setTimeout(resolve, 0));
            expect(screen.getByTestId("msg")).toHaveTextContent("ERROR");
        });
    });

});

