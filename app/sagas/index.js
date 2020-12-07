import { all } from 'redux-saga/effects';
import { loginSaga, signupSaga, forgotSaga, setnewSaga } from './loginSaga';
import { searchSaga } from './search';
import {
  getFollowersSaga,
  getFollowingSaga,
  getUsersListSaga,
  followUserSaga,
  getUserProfileSaga,
} from './user';

export default function* watch() {
  yield all([
    loginSaga(),
    signupSaga(),
    forgotSaga(),
    setnewSaga(),
    searchSaga(),
    getFollowersSaga(),
    getFollowingSaga(),
    getUsersListSaga(),
    followUserSaga(),
    getUserProfileSaga(),
  ]);
}
