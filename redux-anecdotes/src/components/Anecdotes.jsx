import { useDispatch, useSelector } from "react-redux"
import { voteForAnecdote } from "../reducers/anecdoteReducer"
import { notify } from "../reducers/notificationReducer"

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch()

    const handleVote = (anecdoteId) => {
        dispatch(voteForAnecdote(anecdoteId))
        dispatch(notify(`You voted for "${anecdote.content}" anecdote`, 5000))
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