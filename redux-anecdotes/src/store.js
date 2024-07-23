import filterReducer from './reducers/filterReducer'
import anecdotesReducer from './reducers/anecdoteReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        anecdotes: anecdotesReducer,
        filter: filterReducer
    }
})

export default store