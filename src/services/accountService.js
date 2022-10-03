import axios from "axios";

const API_URL = "/api/account";

const signup = (email, username, password) => {
    return axios
        .post(API_URL + "/register", {
            email,
            username,
            password,
        })
        .then((response) => {
            return response.data;
        });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "/login", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.access_token) {
                localStorage.setItem("user", response.data.access_token);
            }

            return response.data;
        });
};

const accountService = {
    signup,
    login,
};

export default accountService