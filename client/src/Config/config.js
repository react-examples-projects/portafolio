import { getToken } from "../Helpers/token";

const API_URL = "http://localhost:4000/api";
const LOGIN = `${API_URL}/login`;
const USER_INFO = `${API_URL}/user?token=${getToken()}`;

export { API_URL, LOGIN, USER_INFO };
