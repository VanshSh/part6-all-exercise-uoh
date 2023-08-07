import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getAnecdotes, updateAnecdote } from './request'
import NotificationContext from './NotificationContext'
import { useContext } from 'react'
const App = () => {
  const [{ message }, notificationMsgDispatch] = useContext(NotificationContext)

  const queryClient = useQueryClient()
  const updateNoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  })
  const handleVote = (anecdote) => {
    anecdote.votes += 1
    updateNoteMutation.mutate(anecdote)

    notificationMsgDispatch({
      type: 'VOTED',
      message: `${anecdote.content} has been voted`,
    })

    setTimeout(() => {
      notificationMsgDispatch({
        type: 'DELETED',
      })
    }, 5000)
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
