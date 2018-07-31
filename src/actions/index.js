import { FETCH_BOOKS, ADD_BOOK, HAND_FAILURE } from './types';
import api from '../api';

export const fetchBooks = (data) => ({
  type: FETCH_BOOKS,
  payload: data
});

export const addBook = (data) => ({
  type: ADD_BOOK,
  payload: data
});

export const handleFailure = error => {
  return {
    type: HAND_FAILURE,
    error
  }
}

export const getLibrary = () => dispatch =>
  api.books.getall().then(data => {
    dispatch(fetchBooks(data));
  });

export const postBook = (data) => dispatch =>
  api.books.add(data)
    .then(() => {
      dispatch(addBook());
      dispatch(getLibrary());
    })
 .catch (error => dispatch(handleFailure(error)))

