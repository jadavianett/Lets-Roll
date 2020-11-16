import axios from "axios";
// passes throught the token for the authorization headers sent to the backend for user/places
export const setAxiosDefaults = (token) => {
    axios.defaults.headers["Authorization"] = token;
}