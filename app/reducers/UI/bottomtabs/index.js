/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from '../../../actions/UI/bottomtabs/types';

const initialState = {
  showBottomTab: false,
};

export const bottomtabReducer = createReducer(initialState, {
  [types.SHOW_BOTTOM_TAB](state) {
    return { ...state, showBottomTab: true };
  },
  [types.HIDE_BOTTOM_TAB](state) {
    return { ...state, showBottomTab: false };
  },
});
