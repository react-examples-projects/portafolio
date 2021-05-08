import axios from "axios";
import { LOGIN } from "../Config/config";

export async function login(data) {
  const xhr = await axios.post(LOGIN, data);
  return xhr?.data?.data;
}
