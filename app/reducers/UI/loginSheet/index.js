import createReducer from 'app/lib/createReducer';
import * as types from '../../../actions/UI/loginSheet/types';

const initialState = {
  showLoginSheet: false,
};

export const loginSheetReducer = createReducer(initialState, {
  [types.SHOW_LOGIN_SHEET](state) {
    return { ...state, showLoginSheet: true };
  },
  [types.HIDE_LOGIN_SHEET](state) {
    return { ...state, showLoginSheet: false };
  },
  [types.TOGGLE_LOGIN_SHEET](state) {
    return { ...state, showLoginSheet: !state.showLoginSheet };
  },
});
