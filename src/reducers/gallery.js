import merge from 'lodash/merge';
import {
  GALLERY_FETCH_SUCCESS,
} from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case GALLERY_FETCH_SUCCESS: {
      const {username, data = [], page, hasMore} = action.payload;
      return merge({}, state, {
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
    default: return state
  }
}
