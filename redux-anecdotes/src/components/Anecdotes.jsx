import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch()

    const handleVote = (anecdoteId) => {
        dispatch(vote(anecdoteId))
    }
    
    return (
        <div style={{borderBottom: '1px dashed gray'}}>
            <p>{anecdote.content}</p>
            <p>Votes: {anecdote.votes}</p>
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
        </div>
    )
}

const Anecdotes = () => {
    const anecdotes = useSelector(state => {
        if (state.filter === '') {
            return state.anecdotes
        }

        return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    })
    
    return (
        <div>
            {anecdotes.map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={anecdote} />
            )}
        </div>
    )
}

export default Anecdotes