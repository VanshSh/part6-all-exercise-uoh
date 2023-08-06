import { configureStore } from '@reduxjs/toolkit'
import anecdoteSlice from './reducers/anecdoteReducer'
import filterSlice from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    anecdoteList: anecdoteSlice.reducer,
    filter: filterSlice.reducer,
  },
})

export default store
