import createReducer from 'app/lib/createReducer';
import * as types from '../../actions/search/types';

const initialState = {
  list: [],
  error: false,
  errorMessage: '',
};

export const searchReducer = createReducer(initialState, {
  [types.SEARCH_REQUEST](state) {
    return { ...state, error: false, errorMessage: '' };
  },
  [types.SEARCH_RESPONSE](state, action) {
    return { ...state, list: action.response };
  },
  [types.SEARCH_FAILED](state, action) {
    return { ...state, error: true, errorMessage: action.error };
  },
});
