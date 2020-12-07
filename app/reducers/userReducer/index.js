import createReducer from 'app/lib/createReducer';
import * as types from '../../actions/users/types';

const initialState = {
  list: [],
  error: false,
  errorMessage: '',
  following: [],
  followers: [],
  userProfile: null,
};

export const userReducer = createReducer(initialState, {
  [types.GET_USERS_REQUEST](state) {
    return { ...state, error: false, errorMessage: '' };
  },
  [types.GET_USERS_RESPONSE](state, action) {
    return { ...state, list: action.response };
  },
  [types.GET_USERS_FAILED](state, action) {
    return { ...state, error: true, errorMessage: action.error };
  },
  [types.GET_USERS_REQUEST](state) {
    return { ...state, error: false, errorMessage: '' };
  },
  [types.GET_FOLLOWERS_RESPONSE](state, action) {
    return { ...state, followers: action.response };
  },
  [types.GET_FOLLOWERS_FAILED](state, action) {
    return { ...state, error: true, errorMessage: action.error };
  },
  [types.GET_FOLLOWING_REQUEST](state) {
    return { ...state, error: false, errorMessage: '' };
  },
  [types.GET_FOLLOWING_RESPONSE](state, action) {
    return { ...state, following: action.response };
  },
  [types.GET_FOLLOWING_FAILED](state, action) {
    return { ...state, error: true, errorMessage: action.error };
  },
  [types.FOLLOW_USER_REQUEST](state) {
    return { ...state, error: false, errorMessage: '' };
  },
  [types.FOLLOW_USER_RESPONSE](state, action) {
    return { ...state, following: [...state.following, action.response] };
  },
  [types.FOLLOW_USER_FAILED](state, action) {
    return { ...state, error: true, errorMessage: action.error };
  },
  [types.GET_USERS_PROFILE_REQUEST](state) {
    return { ...state, error: false, errorMessage: '' };
  },
  [types.GET_USERS_PROFILE_RESPONSE](state, action) {
    return { ...state, userProfile: action.response };
  },
  [types.GET_USERS_PROFILE_FAILED](state, action) {
    return { ...state, error: true, errorMessage: action.error };
  },
});
