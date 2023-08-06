import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
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
  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }
  // Sort the filtered anecdotes based on votes in descending order
  const orderedAnecdotes = [...filteredAnecdotes].sort(
    (a, b) => b.votes - a.votes
  )

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
