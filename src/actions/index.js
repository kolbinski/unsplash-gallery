import {createAction} from 'redux-actions';
import Unsplash, {toJson} from "unsplash-js";

const APP_ACCESS_KEY = '323b207778b1e1116b50a483f60b615cecdd3c399171cf0cb87297b4430318f9';
const APP_SECRET = '6a9b255f15434c58fa6fd1a90a8765dfef899bdd9b18c0d1e91357655fb7c45f';

const unsplash = new Unsplash({
  applicationId: APP_ACCESS_KEY,
  secret: APP_SECRET,
});

export const SET_KEYWORD = 'SET_KEYWORD';
export const SET_USERNAME = 'SET_USERNAME';
export const GALLERY_FETCH_SUCCESS = 'GALLERY_FETCH_SUCCESS';
// export const GALLERY_FETCH_FAILURE = 'GALLERY_FETCH_FAILURE';
export const USERS_FETCH_REQUEST = 'USERS_FETCH_REQUEST';
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
export const USERS_FETCH_FAILURE = 'USERS_FETCH_FAILURE';
export const setKeyword = createAction(SET_KEYWORD);
export const setUsername = createAction(SET_USERNAME);
export const fetchGallerySuccess = createAction(GALLERY_FETCH_SUCCESS);
// export const fetchGalleryFailure = createAction(GALLERY_FETCH_FAILURE);
export const fetchUsersRequest = createAction(USERS_FETCH_REQUEST);
export const fetchUsersSuccess = createAction(USERS_FETCH_SUCCESS);
export const fetchUsersFailure = createAction(USERS_FETCH_FAILURE);

export const changeKeyword = keyword => dispatch => dispatch(setKeyword(keyword));

export const loadUsers = keyword => async (dispatch, getState) => {
  dispatch(setKeyword(keyword));
  dispatch(fetchUsersRequest());
  const state = getState();
  if (state.users[keyword]) return;
  const page = (state.users[keyword] || {page: 0}).page + 1;
  try {
    const res = await unsplash.search.users(keyword, page, 100);
    const data = await toJson(res);
    if (data.errors) {
      dispatch(fetchUsersFailure());
      return;
    }
    dispatch(fetchUsersSuccess({
      keyword,
      data: data.results,
      page,
      hasMore: false,
    }));
  } catch (e) {
    dispatch(fetchUsersFailure());
  }
};

export const loadUserPhotos = username => async (dispatch, getState) => {
  dispatch(setUsername(username));
  const state = getState();
  if (state.gallery[username]) return;
  const page = (state.gallery[username] || {page: 0}).page + 1;
  const res = await unsplash.users.photos(username, page, 100);
  const data = await toJson(res);
  dispatch(fetchGallerySuccess({
    username,
    data,
    page,
    hasMore: false,
  }));
};
