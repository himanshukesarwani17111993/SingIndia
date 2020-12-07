import createReducer from 'app/lib/createReducer';
import * as types from '../../../actions/UI/bubbleplayer/types';

const initialState = {
  showBubblePlayer: false,
};

export const bubblePlayerReducer = createReducer(initialState, {
  [types.SHOW_BUBBLE_PLAYER](state) {
    return { ...state, showBubblePlayer: true };
  },
  [types.HIDE_BUBBLE_PLAYER](state) {
    return { ...state, showBubblePlayer: false };
  },
  [types.TOGGLE_BUBBLE_PLAYER](state) {
    return { ...state, showBubblePlayer: !state.showBubblePlayer };
  },
});
