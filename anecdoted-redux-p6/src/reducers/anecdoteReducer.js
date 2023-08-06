import { createSlice } from '@reduxjs/toolkit'

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    getAllAnecdotes(state, action) {
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
export const { createAnecdote, voteAnecdote, getAllAnecdotes } =
  anecdoteSlice.actions

// This will go to the store so that updated state value can be used
export default anecdoteSlice
