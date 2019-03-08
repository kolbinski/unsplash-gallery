import {createAction} from 'redux-actions';
import Unsplash, {toJson} from "unsplash-js";

const APP_ACCESS_KEY = 'aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5';
const APP_SECRET = 'a5ab4ed2efdc772dca8d5636a26c0d897907df38cd92baa9067e57093d9596b5';

const unsplash = new Unsplash({
  applicationId: APP_ACCESS_KEY,
  secret: APP_SECRET,
});

export const SET_KEYWORD = 'SET_KEYWORD';
export const SET_USERNAME = 'SET_USERNAME';
export const GALLERY_FETCH_SUCCESS = 'GALLERY_FETCH_SUCCESS';
// export const GALLERY_FETCH_FAILURE = 'GALLERY_FETCH_FAILURE';
// export const USERS_FETCH_REQUEST = 'USERS_FETCH_REQUEST';
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
// export const USERS_FETCH_FAILURE = 'USERS_FETCH_FAILURE';
export const setKeyword = createAction(SET_KEYWORD);
export const setUsername = createAction(SET_USERNAME);
export const fetchGallerySuccess = createAction(GALLERY_FETCH_SUCCESS);
// export const fetchGalleryFailure = createAction(GALLERY_FETCH_FAILURE);
export const fetchUsersSuccess = createAction(USERS_FETCH_SUCCESS);
// export const fetchUsersFailure = createAction(USERS_FETCH_FAILURE);

export const changeKeyword = keyword => dispatch => dispatch(setKeyword(keyword));

export const loadUsers = keyword => async (dispatch, getState) => {
  dispatch(setKeyword(keyword));
  const state = getState();
  const page = (state.users[keyword] || {page: 0}).page + 1;
  const res = await unsplash.search.users(keyword, page, 100);
  const data = await toJson(res);
  dispatch(fetchUsersSuccess({
    keyword,
    data: data.results,
    page,
    hasMore: false,
  }));
};

export const loadUserPhotos = username => async (dispatch, getState) => {
  dispatch(setUsername(username));
  const state = getState();
  const page = (state.users[username] || {page: 0}).page + 1;
  const res = await unsplash.users.photos(username, page, 100);
  const data = await toJson(res);
  dispatch(fetchGallerySuccess({
    username,
    data,
    page,
    hasMore: false,
  }));
};
