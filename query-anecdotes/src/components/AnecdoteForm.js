import { createAnecdote } from '../request'
import { useQueryClient, useMutation } from 'react-query'
import NotificationContext from '../NotificationContext'
import { useContext } from 'react'

const AnecdoteForm = () => {
  const [{ message }, notificationMsgDispatch] = useContext(NotificationContext)

  const queryClient = useQueryClient()
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      // the queryClient object first reads the existing notes state of the query and updates it by adding a new note, which is obtained as a parameter of the callback function.
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
    },
    onError: () => {
      notificationMsgDispatch({
        type: 'CREATED',
        message: 'too short , must have length  or more.',
      })
    },
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content })

    notificationMsgDispatch({
      type: 'CREATED',
      message: ` ${content} created successfully`,
    })

    setTimeout(() => {
      notificationMsgDispatch({
        type: 'DELETED',
      })
    }, 5000)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
