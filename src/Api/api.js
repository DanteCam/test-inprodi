import axios from "axios";
import { store } from "../App/Store";

const getToken = () => {
  const state = store.getState();
  const token = state.authStorage.recoveryToken;
  return token;
};

let LoginApi;
if (process.env.NODE_ENV === "development") {
  LoginApi = "http://localhost:4000/";
} else if (process.env.NODE_ENV === "production") {
  LoginApi = "https://improd.herokuapp.com/"; //Change for prod deploy
}

export const loginApi = axios.create({
  baseURL: `${LoginApi}api/login`,
});

export const recoverApi = axios.create({
  baseURL: `${LoginApi}api/recover_password`,
});
export const resetApi = (data) => {
  return axios.post(`${LoginApi}api/reset_password`, data, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};
