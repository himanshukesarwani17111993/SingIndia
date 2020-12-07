/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';
import * as searchtypes from '../actions/search/types';
import * as usertypes from '../actions/users/types';

const initialState = {
  isLoginLoading: false,
  isSearching: false,
  isListLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state) {
    return { ...state, isLoginLoading: false };
  },
  [searchtypes.ENABLE_SEARCH_LOADER](state) {
    return { ...state, isSearching: true };
  },
  [searchtypes.DISABLE_SEARCH_LOADER](state) {
    return { ...state, isSearching: false };
  },
  [usertypes.ENABLE_GET_USERS_LOADER](state) {
    return { ...state, isListLoading: true };
  },
  [usertypes.DISABLE_GET_USERS_LOADER](state) {
    return { ...state, isListLoading: false };
  },
});
