import { createContext, useReducer } from 'react'

const NotificationContext = createContext()

const initalNotificationState = {
  message: null,
}
const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'VOTED':
      return {
        ...state,
        message: `anecdote ${action.message} `,
      }
    case 'CREATED':
      return {
        ...state,
        message: `anecdote ${action.message} created`,
      }
    case 'DELETED':
      return {
        ...state,
        message: null,
      }
    default:
      return state
  }
}

export const NotificationContextProvider = (props) => {
  const [notificationMsg, notificationMsgDispatch] = useReducer(
    notificationReducer,
    initalNotificationState
  )
  return (
    <NotificationContext.Provider
      value={[notificationMsg, notificationMsgDispatch]}
    >
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
