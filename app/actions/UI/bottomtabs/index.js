import * as types from './types';

export function showBottomTabs() {
  return {
    type: types.SHOW_BOTTOM_TAB,
  };
}

export function hideBottomTabs() {
  return {
    type: types.HIDE_BOTTOM_TAB,
  };
}
