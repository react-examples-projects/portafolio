import { getToken } from "../Helpers/token";

const API_URL = "https://portfolio-api-phi.vercel.app/api";
const LOGIN = `${API_URL}/login`;
const USER_INFO = `${API_URL}/user?token=${getToken()}`;
const PROJECTS= `${API_URL}/project`;
export { API_URL, LOGIN, USER_INFO, PROJECTS };
