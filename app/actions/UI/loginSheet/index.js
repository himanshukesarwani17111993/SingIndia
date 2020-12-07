import * as types from './types';

export function show() {
  return {
    type: types.SHOW_LOGIN_SHEET,
  };
}

export function hide() {
  return {
    type: types.HIDE_LOGIN_SHEET,
  };
}

export function toggle() {
  return {
    type: types.TOGGLE_LOGIN_SHEET,
  };
}
