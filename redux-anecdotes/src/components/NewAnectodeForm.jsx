import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const NewAnectodeForm = () => {
    const dispatch = useDispatch()
    
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
    }
    
    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote" type="text" placeholder="enter new anecdote" />
            <button type="submit">create</button>
        </form>
    )
}

export default NewAnectodeForm