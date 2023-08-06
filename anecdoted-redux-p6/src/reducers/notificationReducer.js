// notifications.js

import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: '',
  },
  reducers: {
    setNotification(state, action) {
      const message = action.payload
      return {
        ...state,
        message,
      }
    },
    hideNotification(state, action) {
      return {
        ...state,
        message: '',
      }
    },
  },
})

export const { setNotification, hideNotification } = notificationSlice.actions

// Async action creator for displaying notification for a specific duration
export const displayNotification = (message, timeInSeconds) => (dispatch) => {
  dispatch(setNotification(message))

  setTimeout(() => {
    dispatch(hideNotification())
  }, timeInSeconds * 1000)
}

export default notificationSlice
