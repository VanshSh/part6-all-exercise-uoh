import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state)
  console.log('😇 L-6 in App.js=> ', anecdotes)

  const vote = (id) => {
    dispatch({ type: 'VOTE', payload: { id } })
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
      <form>
        <div>
          <input />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App
