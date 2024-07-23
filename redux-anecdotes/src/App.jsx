import Anecdotes from './components/Anecdotes'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {

  return (
    <>
      <Notification />
      <Filter />
      <Anecdotes />
    </>
  )
}

export default App