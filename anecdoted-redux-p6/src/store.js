import { configureStore } from '@reduxjs/toolkit'
import anecdoteSlice from './reducers/anecdoteReducer'
import filterSlice from './reducers/filterReducer'
import notificationSlice from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    anecdoteList: anecdoteSlice.reducer,
    filter: filterSlice.reducer,
    notification: notificationSlice.reducer,
  },
})

export default store
