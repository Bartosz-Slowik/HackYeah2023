import { getToken } from "./auth";

const hostname = window.location.hostname;

export const apiURL = `http://${hostname}:5000`;

const fetchApi = (path: string, options: RequestInit) => {
  if (!options.headers) {
    options.headers = {} as HeadersInit;
  }
  if (typeof options.body === "string") {
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
    };
  }
  const token = getToken();
  if (token) {
    options.headers = {
      ...options.headers,
      Authentication: `Bearer ${token}`,
    };
  }
  const url = `${apiURL}${path}`;
  return fetch(url, options);
};

export default fetchApi;

export type ServerResponse = {
  message: string;
};