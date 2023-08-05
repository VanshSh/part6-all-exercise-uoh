import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state)

  const vote = (id) => {
    dispatch({ type: 'VOTE', payload: { id } })
  }
  const addNoteHandler = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    dispatch({ type: 'ADD_ANECDOTE', payload: { content } })
    event.target.content.value = ''
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
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
