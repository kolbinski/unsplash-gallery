import merge from 'lodash/merge';
import {
  GALLERY_FETCH_REQUEST,
  GALLERY_FETCH_SUCCESS,
  GALLERY_FETCH_FAILURE,
} from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case GALLERY_FETCH_SUCCESS: {
      const {username, data = [], page, hasMore} = action.payload;
      return merge({}, state, {
        loading: false,
        error: false,
        [username]: {
          data: [
            ...(state[username] || {data: []}).data,
            ...data,
          ],
          page,
          hasMore,
        }
      });
    }
    case GALLERY_FETCH_REQUEST: {
      return merge({}, state, {
        loading: true,
      });
    }
    case GALLERY_FETCH_FAILURE: {
      return merge({}, state, {
        loading: false,
        error: true,
      });
    }
    default: return state
  }
}
