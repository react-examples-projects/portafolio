import { getToken } from "../Helpers/token";

//"https://portfolio-api-phi.vercel.app/api"
const API_URL = "http://localhost:4000/api";
const LOGIN = `${API_URL}/login`;
const USER_INFO = `${API_URL}/user?token=${getToken()}`;
const PROJECTS = `${API_URL}/project`;

const WEB_TECHNOLOGIES = [
  "ReactJS",
  "NodeJS",
  "HTML5",
  "CSS3",
  "Javascript",
  "SASS",
  "ExpressJS",
  "MongoDB + Mongoose",
];

export { API_URL, LOGIN, USER_INFO, PROJECTS, WEB_TECHNOLOGIES };
