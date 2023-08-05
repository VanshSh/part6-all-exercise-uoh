import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state.anecdotes)
  const filterQuery = useSelector((state) => state.filter)

  // Filter the anecdotes based on the filter query
  const filteredAnecdotes = filterQuery
    ? anecdotes.filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filterQuery.toLowerCase())
      )
    : anecdotes

  // Sort the filtered anecdotes based on votes in descending order
  const orderedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  return (
    <div>
      {orderedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <br />
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
