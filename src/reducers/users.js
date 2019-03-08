import merge from 'lodash/merge';
import {
  USERS_FETCH_REQUEST,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILURE,
} from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case USERS_FETCH_REQUEST: {
      return merge({}, state, {
        loading: true,
      });
    }
    case USERS_FETCH_SUCCESS: {
      const {keyword, data = [], page, hasMore} = action.payload;
      return merge({}, state, {
        loading: false,
        error: false,
        [keyword]: {
          data: [
            ...(state[keyword] || {data: []}).data,
            ...data,
          ],
          page,
          hasMore,
        }
      });
    }
    case USERS_FETCH_FAILURE: {
      return merge({}, state, {
        loading: false,
        error: true,
      });
    }
    default: return state
  }
}
