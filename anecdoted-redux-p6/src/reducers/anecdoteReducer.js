import { createSlice } from '@reduxjs/toolkit'
import anedoteService from '../services/anecdote'
// const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    showAllAnecdotes(state, action) {
      return state.concat(...action.payload)
    },
    createAnecdote(state, action) {
      const content = action.payload
      return [...state, content]
    },
    voteAnecdote(state, action) {
      const anecdote = state.find((anecdote) => anecdote.id === action.payload)
      anecdote.votes = anecdote.votes + 1
    },
  },
})

// This will be used to call the function to change the state
export const { createAnecdote, voteAnecdote, showAllAnecdotes } =
  anecdoteSlice.actions

// Async functions using in built redux thunk
export const getAllAnecdotes = () => {
  return async (dispatch) => {
    anedoteService
      .getAll()
      .then((anecdote) => dispatch(showAllAnecdotes(anecdote)))
  }
}

export const createAnecdoteThunk = (content) => {
  return async (dispatch) => {
    const res = await anedoteService.create(content)
    dispatch(createAnecdote(res))
  }
}

// This will go to the store so that updated state value can be used
export default anecdoteSlice
