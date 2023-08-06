import axios from 'axios'

const BASE_URL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(BASE_URL)
  return res.data
}

const create = async (content) => {
  const newAnecdoteObj = {
    content,
    votes: 0,
  }
  const res = await axios.post(BASE_URL, newAnecdoteObj)

  return res.data
}
const anecdoteService = {
  getAll,
  create,
}
export default anecdoteService
