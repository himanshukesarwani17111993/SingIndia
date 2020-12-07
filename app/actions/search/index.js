import * as types from './types';

export function searchRequest(data) {
  return {
    type: types.SEARCH_REQUEST,
    data,
  };
}
export function searchResponse(response) {
  return {
    type: types.SEARCH_RESPONSE,
    response,
  };
}
export function searchFailed() {
  return {
    type: types.SEARCH_FAILED,
  };
}
export function enableLoader() {
  return {
    type: types.ENABLE_SEARCH_LOADER,
  };
}
export function disableLoader() {
  return {
    type: types.DISABLE_SEARCH_LOADER,
  };
}
