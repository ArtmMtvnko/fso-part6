import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getById = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const createNew = async (content) => {
    const newAnecdote = {
        content,
        votes: 0
    } 
    
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data
}

const update = async (id, anecdoteObj) => {
    const response = await axios.put(`${baseUrl}/${id}`, anecdoteObj)
    return response.data
}

export default { getAll, getById, createNew, update }