import ReactDOM from 'react-dom/client'
import App from './App'

import filterReducer from './reducers/filterReducer'
import anecdotesReducer from './reducers/anecdoteReducer'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const reducer = combineReducers({
    anecdotes: anecdotesReducer,
    filter: filterReducer
})

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)