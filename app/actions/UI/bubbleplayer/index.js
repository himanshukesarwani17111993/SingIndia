import * as types from './types';

export function show() {
  return {
    type: types.SHOW_BUBBLE_PLAYER,
  };
}

export function hide() {
  return {
    type: types.HIDE_BUBBLE_PLAYER,
  };
}

export function toggle() {
  return {
    type: types.TOGGLE_BUBBLE_PLAYER,
  };
}
