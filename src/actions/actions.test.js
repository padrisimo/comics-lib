import React from 'react'
import { fetchBooks, addBook, handleFailure } from '../actions'
import { FETCH_BOOKS, ADD_BOOK, HAND_FAILURE } from '../actions/types'

describe('Actions test', () => {
  it('should handle library request', () => {
    expect(fetchBooks()).toEqual({
      type: FETCH_BOOKS
    })
  })
  it('should contain an action to handle failure', () => {
    const errorAction = 'error'
    expect(handleFailure(errorAction)).toEqual({
      type: HAND_FAILURE,
      error: errorAction
    })
  })
  it('should handle success posting a book', () => {
    const response = [
      {
        "id": 8,
        "image": "http://www.coverbrowser.com/image/bestselling-comics-2007/3591-1.jpg",
        "title": "Batman, Silence",
        "author": "Jim lee",
        "price": 18.50
        }
    ]
    expect(addBook(response)).toEqual({
      type: ADD_BOOK,
      payload: response
    })
  })
})
