import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Anecdote = ({header, text}) => {
  return (
    <>
      <h1>{header}</h1>
      <p>{text}</p>
    </>
  )
}

const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes
    }

    return state.anecdotes.filter(anecdote => anecdote.includes(state.filter))
  })
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([...anecdotes].fill(0))

  const [filterText, setFilterText] = useState('')

  const generateAnecdotes = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
  }

  const getBestAnecdote = () => {
    const highestScore = Math.max(...votes)
    const index = votes.findIndex(i => i === highestScore)
    return anecdotes[index]
  }

  const filterAnecdote = (e) => {
    dispatch({
      type: 'FILTER',
      payload: e.target.value
    })
    setFilterText(e.target.value)
  }

  return (
    <>
      <div>
        <Anecdote header='Anecdote of the day' text={anecdotes[selected]} />
        <p>Has {votes[selected]} votes</p>
      </div>
      <button onClick={vote}>Vote</button>
      <button onClick={generateAnecdotes}>Next anecdote</button>
      <Anecdote header='Anecdote with most votes' text={getBestAnecdote()} />

      <input type="text" value={filterText} onChange={(e) => filterAnecdote(e)} />
      <div>
        {anecdotes.map((anecdote, i) => 
          <p key={i}>{anecdote}</p>
        )}
      </div>
    </>
  )
}

export default App