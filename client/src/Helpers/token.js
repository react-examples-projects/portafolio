export function getToken() {
  return sessionStorage.getItem("token");
}

export function existsToken() {
  return getToken() !== null;
}

export function setToken(token) {
  sessionStorage.setItem("token", token);
}

export function removeToken() {
  sessionStorage.removeItem("token");
}
