import axios from "axios";
import { AuthModel } from "app/models/UserModel";
import { cognitoUserModel } from "app/models/UserModel";

const API_URL = process.env.REACT_APP_API_URL;

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/get-user`;
export const LOGIN_URL = `${API_URL}/auth/login`;
export const REGISTER_URL = `${API_URL}/auth/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`;

export function login(email: string, password: string) {
  return axios.post(LOGIN_URL, { email, password });
}

export function register(email: string, firstname: string, lastname: string, password: string) {
  return axios.post<AuthModel>(REGISTER_URL, {
    email,
    firstname,
    lastname,
    password,
  });
}

export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  return axios.get<cognitoUserModel>(GET_USER_BY_ACCESSTOKEN_URL);
}
