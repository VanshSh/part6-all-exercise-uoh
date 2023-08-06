import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: '',
    type: '',
  },
  reducers: {
    showNotification(state, action) {
      const { message, type } = action.payload
      return {
        ...state,
        message,
        type,
      }
    },
    hideNotification(state, action) {
      return {
        ...state,
        message: '',
        type: '',
      }
    },
  },
})

export const { showNotification, hideNotification } = notificationSlice.actions
export default notificationSlice
