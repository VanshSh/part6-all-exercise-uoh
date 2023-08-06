import axios from 'axios'

export const getAnecdotes = () => {
  return axios
    .get('http://localhost:3001/anecdotes')
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
