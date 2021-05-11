import axios from "axios";
import { LOGIN, USER_INFO, PROJECTS } from "../Config/config";
import { getToken } from "./token";

const config = () => ({
  headers: {
    Authorization: "Bearer " + getToken(),
  },
});

export async function login(data) {
  const xhr = await axios.post(LOGIN, data);
  return xhr?.data?.data;
}

export async function getUserInfo() {
  if (!getToken()) return null;
  const res = await axios.get(USER_INFO, config());
  return res?.data?.data;
}

export async function createProject(payload) {
  if (!getToken()) return null;
  const res = await axios.post(PROJECTS, payload, config());
  return res?.data?.data;
}

export async function getProjects() {
  if (!getToken()) return null;
  const res = await axios.get(PROJECTS + "s", config());
  return res?.data?.data;
}
