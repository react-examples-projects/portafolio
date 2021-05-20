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
  const res = await axios.get(PROJECTS + "s");
  return res?.data?.data;
}

export async function deleteProject(id) {
  if (!getToken()) return null;
  const res = await axios.delete(`${PROJECTS}?id=${id}`, config());
  return res?.data?.data;
}

export async function updateProject({ _id: id, data }) {
  if (!getToken()) return null;
  const res = await axios.put(`${PROJECTS}?id=${id}`, data, config());
  return res?.data?.data;
}
