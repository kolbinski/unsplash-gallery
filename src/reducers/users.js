import merge from 'lodash/merge';
import {
  USERS_FETCH_SUCCESS,
} from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case USERS_FETCH_SUCCESS: {
      const {keyword, data = [], page, hasMore} = action.payload;
      return merge({}, state, {
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
    default: return state
  }
}
