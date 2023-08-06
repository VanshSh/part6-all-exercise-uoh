import { useDispatch } from 'react-redux'
import { createAnecdoteThunk } from '../reducers/anecdoteReducer'

import {
  hideNotification,
  showNotification,
} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addNoteHandler = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    dispatch(createAnecdoteThunk(content))
    dispatch(
      showNotification({
        type: 'success',
        message: 'New anecdote added!',
      })
    )

    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
    event.target.content.value = ''
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNoteHandler}>
        <div>
          <input name='content' />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
