import axios from "axios";
import MockAdapter from "axios-mock-adapter"
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RegisterForm from "../components/RegisterForm"

const URL = "/api/account/register";

describe("register", () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe("wrong email regex", () => {
        it("should display invalid email", async () => {
            render(<RegisterForm />);

            fireEvent.change(screen.getByTestId("email"), { target: { value: "invalidemail" } });

            expect(screen.getByTestId("email-msg")).toHaveTextContent("This email is invalid");
        });
    });


    describe("register success", () => {
        it("should display success register message", async () => {
            await mock.onPost(URL).reply(200);

            render(<RegisterForm />)

            fireEvent.change(screen.getByTestId("email"), { target: { value: "email@email.com" } });
            fireEvent.change(screen.getByTestId("username"), { target: { value: "username" } });
            fireEvent.change(screen.getByTestId("password"), { target: { value: "password" } });
            fireEvent.click(screen.getByRole("button"));

            await new Promise(resolve => setTimeout(resolve, 1000));
            expect(screen.getByTestId("msg").textContent === "Account Created Successfully");

        });
    });

    describe("register failure", () => {
        it("should display failure register message", async () => {
            await mock.onPost(URL).reply(401);

            render(<RegisterForm />)

            fireEvent.change(screen.getByTestId("email"), { target: { value: "email@email.com" } });
            fireEvent.change(screen.getByTestId("username"), { target: { value: "username" } });
            fireEvent.change(screen.getByTestId("password"), { target: { value: "password" } });
            fireEvent.click(screen.getByRole("button"));

            await new Promise(resolve => setTimeout(resolve, 1000));
            expect(screen.getByTestId("msg").textContent === "Account Creation Failed");

        });
    });

});