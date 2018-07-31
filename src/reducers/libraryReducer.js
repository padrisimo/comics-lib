import { FETCH_BOOKS, ADD_BOOK } from '../actions/types';

const library = (state = {
  data: {},
  loading: true,
  fetched: false
}, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { data: action.payload, loading: false, fetched: true };
    case ADD_BOOK:
      return { ...state, loading: true }
    default:
      return state;
  }
}

export default library;