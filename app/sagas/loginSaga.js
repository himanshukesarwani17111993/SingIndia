import { put, takeEvery, call } from 'redux-saga/effects';
import * as loginActions from '../actions/loginActions';
import * as types from '../actions/types';
import axios from 'axios';
import API from '../api/ApiConstants';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationActions from '../navigation/NavigationService';

function loginApi(data) {
  return axios.post(`${API.BASE_URL}${API.LOGIN}`, data);
}

function signupApi(data) {
  return axios.post(`${API.BASE_URL}${API.SIGNUP}`, data);
}

function forgotApi(data) {
  return axios.post(`${API.BASE_URL}${API.FORGOT}`, data);
}
function setnewApi(data) {
  return axios.post(`${API.BASE_URL}${API.NEW_PASS}`, data);
}

function* loginAsync(action) {
  try {
    yield put(loginActions.enableLoader());
    const response = yield call(loginApi, action.data);
    yield put(loginActions.onLoginResponse(response.data.data));
    yield call(storeToken, response.data.token);
    yield put(loginActions.disableLoader({}));
  } catch (error) {
    yield put(loginActions.loginFailed(error.response.data.message));
    yield put(loginActions.disableLoader({}));
  }
}

function* signupAsync(action) {
  try {
    yield put(loginActions.enableLoader());
    const response = yield call(signupApi, action.data);
    console.log(response.data);
    if (response.data.status === 200) {
      yield put(loginActions.onSignupResponse(response.data));
      yield put(loginActions.disableLoader({}));
    } else {
      yield put(loginActions.loginFailed(response.data.message));
      yield put(loginActions.disableLoader({}));
    }
  } catch (error) {
    yield put(loginActions.loginFailed(error.response.data.message));
    yield put(loginActions.disableLoader({}));
  }
}

function* forgotAsync(action) {
  try {
    yield put(loginActions.enableLoader());
    const response = yield call(forgotApi, action.data);
    if (response.data.status === 403) {
      yield put(loginActions.loginFailed(response.data.message));
      yield put(loginActions.disableLoader({}));
      return;
    }
    yield put(loginActions.responseForgot());
    yield put(loginActions.disableLoader({}));
    NavigationActions.navigate('SetNewPassword', {
      email: action.data.Email,
      otp: response.data.data.otp,
    });
  } catch (error) {
    console.log(error);
    yield put(loginActions.failedForgot(error.response.data.message));
    yield put(loginActions.disableLoader({}));
  }
}

function* setnewAsync(action) {
  try {
    yield put(loginActions.enableLoader());
    const response = yield call(setnewApi, action.data);

    if (response.data.status === 403) {
      yield put(loginActions.failedNew(response.data.message));
      yield put(loginActions.disableLoader({}));
      return;
    }
    yield put(loginActions.responseNew());
    yield put(loginActions.disableLoader({}));
    NavigationActions.reset();
  } catch (error) {
    yield put(loginActions.failedNew(error.response.data.message));
    yield put(loginActions.disableLoader({}));
  }
}

export function* loginSaga() {
  yield takeEvery(types.LOGIN_REQUEST, loginAsync);
}

export function* signupSaga() {
  yield takeEvery(types.SIGNUP_REQUEST, signupAsync);
}
export function* forgotSaga() {
  yield takeEvery(types.FORGOT_PASSWORD_REQUEST, forgotAsync);
}
export function* setnewSaga() {
  yield takeEvery(types.NEW_PASSWORD_REQUEST, setnewAsync);
}

const storeToken = async token => {
  await AsyncStorage.setItem('token', token);
};
