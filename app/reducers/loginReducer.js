/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  successMessage: '',
  error: false,
  success: false,
  errorMessage: '',
  user: null,
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state) {
    return {
      ...state,
      errorMessage: '',
      error: false,
      success: false,
    };
  },
  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      isLoggedIn: true,
      error: false,
      user: action.response,
    };
  },
  [types.LOGIN_FAILED](state, action) {
    return {
      ...state,
      isLoggedIn: false,
      errorMessage: action.error,
      error: true,
    };
  },
  [types.LOG_OUT](state) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.SIGNUP_REQUEST](state) {
    return {
      ...state,
      errorMessage: '',
      error: false,
      success: false,
    };
  },
  [types.SIGNUP_RESPONSE](state) {
    return {
      ...state,
      success: true,
      successMessage: 'Registered Successfully',
    };
  },
  [types.SIGNUP_FAILED](state, action) {
    return {
      ...state,
      errorMessage: action.error,
      error: true,
      success: false,
    };
  },
  [types.FORGOT_PASSWORD_REQUEST](state) {
    return {
      ...state,
      errorMessage: '',
      error: false,
      success: false,
    };
  },
  [types.FORGOT_PASSWORD_RESPONSE](state) {
    return {
      ...state,
      success: false,
    };
  },
  [types.FORGOT_PASSWORD_FAILED](state, action) {
    return {
      ...state,
      errorMessage: action.error,
      error: true,
      success: false,
    };
  },
  [types.NEW_PASSWORD_REQUEST](state) {
    return {
      ...state,
      errorMessage: '',
      error: false,
      success: false,
    };
  },
  [types.NEW_PASSWORD_RESPONSE](state) {
    return {
      ...state,
      success: false,
    };
  },
  [types.NEW_PASSWORD_FAILED](state, action) {
    return {
      ...state,
      errorMessage: action.error,
      error: true,
      success: false,
    };
  },
  [types.CLEAR_LOGIN_MESSAGE](state) {
    return {
      ...state,
      errorMessage: '',
      error: false,
      success: false,
      successMessage: '',
    };
  },
});
