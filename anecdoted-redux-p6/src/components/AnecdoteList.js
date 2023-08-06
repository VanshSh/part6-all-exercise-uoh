import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, getAllAnecdotes } from '../reducers/anecdoteReducer'
import anedoteService from '../services/anecdote'
import {
  hideNotification,
  showNotification,
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  // Initialize a flag to track whether the notification is visible or not
  const [notificationVisible, setNotificationVisible] = useState(false)
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

  // Define the debounced function
  const debounce = (func, delay) => {
    let timeoutId
    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func(...args), delay)
    }
  }

  // Define the debounced hideNotification function
  const debouncedHideNotification = debounce(() => {
    dispatch(hideNotification())
    // Reset the notificationVisible flag after hiding the notification
    setNotificationVisible(false)
  }, 5000)

  // Vote the anecdote
  const vote = (id, content) => {
    dispatch(voteAnecdote(id))

    if (!notificationVisible) {
      // Call the debounced showNotification function
      dispatch(
        showNotification({ message: `voted for ${content}`, type: 'Voted' })
      )
      setNotificationVisible(true)

      // Call the debounced hideNotification function after 5 seconds
      debouncedHideNotification()
    }
  }

  // Sort the filtered anecdotes based on votes in descending order
  const orderedAnecdotes = [...filteredAnecdotes].sort(
    (a, b) => b.votes - a.votes
  )

  useEffect(() => {
    anedoteService
      .getAll()
      .then((anecdote) => dispatch(getAllAnecdotes(anecdote)))
  }, [dispatch])

  return (
    <div>
      {orderedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          {anecdote.id}
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
