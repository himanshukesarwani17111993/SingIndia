import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../../actions/users';
import * as types from '../../actions/users/types';
import axios from 'axios';
import API from '../../api/ApiConstants';
import AsyncStorage from '@react-native-community/async-storage';

function followersApi(data, token) {
  const headers = { Authorization: token };
  return axios.post(`http://139.59.233.94:5000/v1/api/follow-user-list`, data, {
    headers,
  });
}

function followingApi(data, token) {
  const headers = { Authorization: token };
  return axios.post(
    `http://139.59.233.94:5000/v1/api/following-user-list`,
    data,
    {
      headers,
    },
  );
}

function usersApi(data, token) {
  const headers = { Authorization: token };
  return axios.post(`http://139.59.233.94:5000/v1/api/get-users`, data, {
    headers,
  });
}

function followUserApi(data, token) {
  const headers = { Authorization: token };
  return axios.post(`http://139.59.233.94:5000/v1/api/to-follow`, data, {
    headers,
  });
}

function getUserProfileApi(data, token) {
  const headers = { Authorization: token };
  return axios.post(`http://139.59.233.94:5000/v1/api/get-user-profile`, data, {
    headers,
  });
}

function* followersAsync(action) {
  try {
    yield put(actions.enableLoader());
    const token = yield call(getToken);
    const response = yield call(followersApi, action.data, token);
    yield put(actions.getFollowersResponse(response.data.data.list));
    yield put(actions.disableLoader({}));
  } catch (error) {
    yield put(actions.getFollowersFailed(error.response.data.message));
    yield put(actions.disableLoader({}));
  }
}

function* followingAsync(action) {
  try {
    yield put(actions.enableLoader());
    const token = yield call(getToken);
    const response = yield call(followingApi, action.data, token);
    yield put(actions.getFollowersResponse(response.data.data.list));
    yield put(actions.disableLoader({}));
  } catch (error) {
    yield put(actions.getFollowersFailed(error.response.data.message));
    yield put(actions.disableLoader({}));
  }
}
function* usersAsync(action) {
  try {
    yield put(actions.enableLoader());
    const token = yield call(getToken);
    const response = yield call(usersApi, action.data, token);

    yield put(actions.getResponse(response.data.data.list));
    yield put(actions.disableLoader({}));
  } catch (error) {
    yield put(actions.getFailed(error.response.data.message));
    yield put(actions.disableLoader({}));
  }
}

function* followUserAsync(action) {
  try {
    yield put(actions.enableLoader());
    const token = yield call(getToken);
    const response = yield call(followUserApi, action.data, token);
    yield put(actions.followUserResponse(response.data.data.list));
    yield put(actions.disableLoader({}));
  } catch (error) {
    yield put(actions.followUserFailed(error.response.data.message));
    yield put(actions.disableLoader({}));
  }
}
function* getUserProfileAsync(action) {
  try {
    yield put(actions.enableLoader());
    const token = yield call(getToken);
    const response = yield call(getUserProfileApi, action.data, token);
    yield put(actions.getUserProfileResponse(response.data.data.users));
    yield put(actions.disableLoader({}));
  } catch (error) {
    yield put(actions.getUserProfileFailed(error.response.data.message));
    yield put(actions.disableLoader({}));
  }
}

export function* getUsersListSaga() {
  yield takeEvery(types.GET_USERS_REQUEST, usersAsync);
}
export function* getFollowersSaga() {
  yield takeEvery(types.GET_FOLLOWERS_REQUEST, followersAsync);
}

export function* getFollowingSaga() {
  yield takeEvery(types.GET_FOLLOWING_REQUEST, followingAsync);
}

export function* followUserSaga() {
  yield takeEvery(types.FOLLOW_USER_REQUEST, followUserAsync);
}
export function* getUserProfileSaga() {
  yield takeEvery(types.GET_USERS_PROFILE_REQUEST, getUserProfileAsync);
}

function getToken() {
  return AsyncStorage.getItem('token');
}
