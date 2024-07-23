import { useEffect } from 'react'
import Anecdotes from './components/Anecdotes'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import NewAnectodeForm from './components/NewAnectodeForm'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  return (
    <>
      <Notification />
      <Filter />
      <Anecdotes />
      <NewAnectodeForm />
    </>
  )
}

export default App