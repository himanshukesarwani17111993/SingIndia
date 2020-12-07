import * as types from './types';

export function getRequest(data) {
  return {
    type: types.GET_USERS_REQUEST,
    data,
  };
}
export function getResponse(response) {
  return {
    type: types.GET_USERS_RESPONSE,
    response,
  };
}
export function getFailed() {
  return {
    type: types.GET_USERS_FAILED,
  };
}

export function enableLoader() {
  return {
    type: types.ENABLE_GET_USERS_LOADER,
  };
}
export function disableLoader() {
  return {
    type: types.DISABLE_GET_USERS_LOADER,
  };
}

export function getFollowersRequest(data) {
  return {
    type: types.GET_FOLLOWERS_REQUEST,
    data,
  };
}
export function getFollowersResponse(response) {
  return {
    type: types.GET_FOLLOWERS_RESPONSE,

    response,
  };
}
export function getFollowersFailed(error) {
  return {
    type: types.GET_FOLLOWERS_FAILED,
    error,
  };
}

export function getFollowingRequest(data) {
  return {
    type: types.GET_FOLLOWERS_REQUEST,
    data,
  };
}
export function getFollowingResponse(response) {
  return {
    type: types.GET_FOLLOWERS_RESPONSE,

    response,
  };
}
export function getFollowingFailed(error) {
  return {
    type: types.GET_FOLLOWERS_FAILED,
    error,
  };
}

export function followUserRequest(data) {
  return {
    type: types.FOLLOW_USER_REQUEST,
    data,
  };
}

export function followUserResponse(response) {
  return {
    type: types.FOLLOW_USER_RESPONSE,
    response,
  };
}

export function followUserFailed(error) {
  return {
    type: types.FOLLOW_USER_FAILED,
    error,
  };
}

export function getUserProfileRequest(data) {
  return {
    type: types.GET_USERS_PROFILE_REQUEST,
    data,
  };
}

export function getUserProfileResponse(response) {
  return {
    type: types.GET_USERS_PROFILE_RESPONSE,
    response,
  };
}

export function getUserProfileFailed(error) {
  return {
    type: types.GET_USERS_PROFILE_FAILED,
    error,
  };
}
