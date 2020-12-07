import * as types from './types';

export function requestLogin(data) {
  return {
    type: types.LOGIN_REQUEST,
    data,
  };
}

export function loginFailed(error) {
  return {
    type: types.LOGIN_FAILED,
    error,
  };
}

export function onLoginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}

export function requestSignup(data) {
  return {
    type: types.SIGNUP_REQUEST,
    data,
  };
}

export function signupFailed(error) {
  return {
    type: types.SIGNUP_FAILED,
    error,
  };
}

export function onSignupResponse(response) {
  return {
    type: types.SIGNUP_RESPONSE,
    response,
  };
}

export function requestForgot(data) {
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
    data,
  };
}

export function failedForgot(error) {
  return {
    type: types.FORGOT_PASSWORD_FAILED,
    error,
  };
}

export function responseForgot(response) {
  return {
    type: types.FORGOT_PASSWORD_RESPONSE,
    response,
  };
}
export function requestNew(data) {
  return {
    type: types.NEW_PASSWORD_REQUEST,
    data,
  };
}

export function failedNew(error) {
  return {
    type: types.NEW_PASSWORD_FAILED,
    error,
  };
}

export function responseNew(response) {
  return {
    type: types.NEW_PASSWORD_RESPONSE,
    response,
  };
}

export function clearMessage() {
  return {
    type: types.CLEAR_LOGIN_MESSAGE,
  };
}
