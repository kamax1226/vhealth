import { LOGIN, REGISTER, LOGOUT, USER_REQUESTED, USER_LOADED, SET_USER } from '../types/auth';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Action } from "@reduxjs/toolkit";
import { cognitoUserModel } from 'app/models/UserModel';

export interface ActionWithPayload<T> extends Action {
    payload?: T;
};

const initialAuthState: IAuthState = {
    user: undefined,
    accessToken: undefined,
    idToken: undefined,
    refreshToken: undefined,
};

export interface IAuthState {
    user?: cognitoUserModel;
    accessToken?: string;
    idToken?: string;
    refreshToken?: string;
};

const authReducer = persistReducer(
    { storage, key: "hopblox-auth", whitelist: ["user", "accessToken"] },
    (state: IAuthState = initialAuthState, action: ActionWithPayload<IAuthState>) => {
        switch (action.type) {
            case LOGIN: {
                const accessToken = action.payload?.accessToken;
                const idToken = action.payload?.idToken;
                const refreshToken = action.payload?.refreshToken;
                return { accessToken, idToken, refreshToken, user: undefined };
            }

            case REGISTER: {
                const accessToken = action.payload?.accessToken;
                return { accessToken, user: undefined };
            }

            case LOGOUT: {
                return initialAuthState;
            }

            case USER_REQUESTED: {
                return { ...state, user: undefined };
            }

            case USER_LOADED: {
                const user = action.payload?.user;
                return { ...state, user };
            }

            case SET_USER: {
                const user = action.payload?.user;
                return { ...state, user };
            }

            default:
                return state;
        }
    }
);

export default authReducer;
