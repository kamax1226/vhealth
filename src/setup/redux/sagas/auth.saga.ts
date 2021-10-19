// import { call, put, takeLatest } from 'redux-saga/effects';
import { put, takeLatest } from '@redux-saga/core/effects';
import { LOGIN, LOGIN_FAILED, REGISTER, USER_REQUESTED } from '../types/auth';
import { Action } from "@reduxjs/toolkit";
import { cognitoUserModel } from 'app/models/UserModel';

export interface ActionWithPayload<T> extends Action {
    payload?: T;
};

export interface IAuthState {
    user?: cognitoUserModel;
    accessToken?: string;
    idToken?: string;
    refreshToken?: string;
};

function* loginSaga(action: ActionWithPayload<IAuthState>) {
    try {
        const { accessToken, idToken, refreshToken, user } = yield(action.payload);

        put({
            type: LOGIN,
            payload: { accessToken, idToken, refreshToken, user },
        });
    } catch (error) {
        put({
            type: LOGIN_FAILED,
            payload: error,
        });
    }
}

function* registerSaga() {

}

function* userRequested() {

}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(USER_REQUESTED, userRequested);
}