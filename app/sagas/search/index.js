import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../../actions/search';
import * as types from '../../actions/search/types';
import axios from 'axios';
import API from '../../api/ApiConstants';
import AsyncStorage from '@react-native-community/async-storage';

function searchApi(data, token) {
  const headers = { Authorization: token };

  return axios.post(`http://139.59.233.94:5000/v1/api/search-by-artist`, data, {
    headers,
  });
}

function* searchAsync(action) {
  try {
    yield put(actions.enableLoader());
    const token = yield call(getToken);
    const response = yield call(searchApi, action.data, token);
    console.log(response.data);
    yield put(actions.searchResponse(response.data.data.list));
    yield put(actions.disableLoader({}));
  } catch (error) {
    yield put(actions.searchFailed(error.response.data.message));
    yield put(actions.disableLoader({}));
  }
}

function getToken() {
  return AsyncStorage.getItem('token');
}

export function* searchSaga() {
  yield takeEvery(types.SEARCH_REQUEST, searchAsync);
}
