import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addNoteHandler = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    dispatch(createAnecdote(content))
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
