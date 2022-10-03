import request from "./request";

const API_URL = "/api/user/details";

const getProfile = () => {
    return request(API_URL)
}

const profileService = {
    getProfile
}

export default profileService