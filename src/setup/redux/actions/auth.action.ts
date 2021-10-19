import { cognitoUserModel } from 'app/models/UserModel';
import { LOGIN, REGISTER, LOGOUT, USER_REQUESTED, USER_LOADED, SET_USER } from '../types/auth';

export const login = (accessToken: string, idToken: string, refreshToken: string) => ({
    type: LOGIN,
    payload: { accessToken, idToken, refreshToken },
});

export const register = (accessToken: string) => ({
    type: REGISTER,
    payload: { accessToken },
});

export const logout = () => ({
    type: LOGOUT,
});

export const requestUser = () => ({
    type: USER_REQUESTED,
});

export const fulfillUser = (user: cognitoUserModel) => ({
    type: USER_LOADED,
    payload: { user },
});

export const setUser = (user: cognitoUserModel) => ({
    type: SET_USER,
    payload: { user },
});
