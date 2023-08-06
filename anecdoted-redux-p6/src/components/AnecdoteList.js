import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, getAllAnecdotes } from '../reducers/anecdoteReducer'
import { displayNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  // Initialize a flag to track whether the notification is visible or not

  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state)
  const anecdotesArr = anecdotes.anecdoteList
  const filterQuery = anecdotes.filter

  // Filter the anecdotes based on the filter query
  const filteredAnecdotes = filterQuery
    ? anecdotesArr.filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filterQuery.toLowerCase())
      )
    : anecdotesArr

  // Vote the anecdote
  const vote = (id, content) => {
    dispatch(voteAnecdote(id))
    dispatch(displayNotification(`👍 You voted '${content}'`, 5))
  }

  // Sort the filtered anecdotes based on votes in descending order
  const orderedAnecdotes = [...filteredAnecdotes].sort(
    (a, b) => b.votes - a.votes
  )
  useEffect(() => {
    dispatch(getAllAnecdotes())
  }, [dispatch])

  return (
    <div>
      {orderedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <br />
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
