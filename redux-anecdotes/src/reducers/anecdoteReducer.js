import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        addAnecdote(state, action) {
            state.push({
                content: action.payload,
                votes: 0
            })
        },
        vote(state, action) {
            const anecdoteToVote = state.find(anecdote => anecdote.id === action.payload)
            anecdoteToVote.votes++
        },
        appendAnecdote(state, action) {
            state.push(action.payload)
        },
        setAnecdotes(state, action) {
            return action.payload
        }
    }
})

export const { addAnecdote, vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes))
    }
}

export const createAnecdote = (content) => {
    return async (dispatch) => {
        const anecdote = await anecdoteService.createNew(content)
        dispatch(appendAnecdote(anecdote))
    }
}

export const voteForAnecdote = (id) => {
    return async (dispatch) => {
        const anecdoteToVote = await anecdoteService.getById(id)
        await anecdoteService.update(id, {
            ...anecdoteToVote,
            votes: anecdoteToVote.votes + 1
        })
        dispatch(vote(id))
    }
}

export default anecdoteSlice.reducer