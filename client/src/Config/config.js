import { getToken } from "../Helpers/token";

//"https://portfolio-api-phi.vercel.app/api"
const API_URL = "https://portfolio-api-phi.vercel.app/api";
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
  "PHP",
];

// email config
const EMAILJS = {
  SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
  TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
  USER_ID: process.env.REACT_APP_USER_ID,
};

export { API_URL, LOGIN, USER_INFO, PROJECTS, WEB_TECHNOLOGIES, EMAILJS };
