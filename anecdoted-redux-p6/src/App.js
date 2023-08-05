import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, voteAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector((state) => state)
  const orderedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }
  const addNoteHandler = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    dispatch(createAnecdote(content))
    event.target.content.value = ''
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      {orderedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <h1>{anecdote.id}</h1>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
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

export default App
