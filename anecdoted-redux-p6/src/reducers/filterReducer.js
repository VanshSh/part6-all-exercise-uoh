export function filterAncedote(query) {
  return {
    type: 'FILTER_ANECDOTE',
    payload: { query },
  }
}
const filterReducer = (state = null, action) => {
  switch (action.type) {
    case 'FILTER_ANECDOTE':
      return action.payload.query

    default:
      return state
  }
}

export default filterReducer
