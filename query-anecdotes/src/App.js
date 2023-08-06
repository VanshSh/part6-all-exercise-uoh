import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery } from 'react-query'
import { getAnecdotes } from './request'
const App = () => {
  const handleVote = (anecdote) => {
    console.log('vote')
  }

  const result = useQuery('anecdotes', getAnecdotes, {
    retry: false,
    refetchOnWindowFocus: false,
  })

  const anecdotes = result.data
  if (result.isLoading) {
    return <div>loading data...</div>
  }
  if (result.isError) {
    return <div> 🩻 error :(</div>
  }

  return (
    <div>
      {result.isSuccess && (
        <div>
          <h3>Anecdote app</h3>

          <Notification />
          <AnecdoteForm />

          {anecdotes.map((anecdote) => (
            <div key={anecdote.id}>
              <div>{anecdote.content}</div>
              <div>
                has {anecdote.votes}
                <br />
                <button onClick={() => handleVote(anecdote)}>vote</button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
