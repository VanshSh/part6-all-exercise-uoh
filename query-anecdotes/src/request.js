import axios from 'axios'
const baseURL = 'http://localhost:3001/anecdotes'
export const getAnecdotes = () => {
  return axios
    .get(baseURL)
    .then((res) => {
      if (res.status === 200) {
        return res.data // Return the data from the response
      } else {
        console.log('😇 L-9 in request.js=> ', 'Something went wrong')
        throw new Error('Something went wrong') // Throw an error to be caught in the catch block
      }
    })
    .catch((err) => {
      console.log('😇 L-14 in request.js=> ', err.message)
      throw err // Re-throw the error to be caught in the component using the query
    })
}
export const createAnecdote = (newNote) =>
  axios
    .post(baseURL, newNote)
    .then((res) => {
      if (res.status === 201) {
        return res.data
      } else {
        console.log('😇 L-19 in request.js=> ', 'Something went wrong')
        throw new Error('Something went wrong')
      }
    })
    .catch((err) => {
      console.log('😇 L-24 in request.js=> ', err.message)
      throw err
    })
