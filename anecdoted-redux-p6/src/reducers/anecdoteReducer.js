const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

// function to create new anecdote object
export function createAnecdote(content) {
  return {
    type: 'ADD_ANECDOTE',
    payload: { content },
  }
}
export function voteAnecdote(id) {
  return {
    type: 'VOTE',
    payload: { id },
  }
}
const getId = () => (100000 * Math.random()).toFixed(0)
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      return state.map((anecdote) => {
        if (anecdote.id === action.payload.id) {
          return {
            ...anecdote,
            votes: anecdote.votes + 1,
          }
        }
        return anecdote
      })
    case 'ADD_ANECDOTE':
      const finalAnecdote = asObject(action.payload.content)

      return [...state, finalAnecdote]
    default:
      return state
  }
}

export default reducer
