import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/filterAnecdotes'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const App = () => {
  const { message, type } = useSelector((state) => state.notification)
  return (
    <div>
      <h2>Anecdotes</h2>
      {message && <Notification message={message} type={type} />}
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
