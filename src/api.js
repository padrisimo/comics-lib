import axios from 'axios';

const URL = 'http://localhost:5000'

export default {
  books: {
    add: (data) =>
      axios.post(`${URL}/books`, data).then(res => res.data),
    getall: () =>
      axios.get(`${URL}/books`).then(res => res.data)

  }
}