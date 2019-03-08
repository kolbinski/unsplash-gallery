import {
  SET_KEYWORD,
} from '../actions';

export default (state = '', action) => {
  switch (action.type) {
    case SET_KEYWORD: {
      return action.payload;
    }
    default: return state
  }
}
