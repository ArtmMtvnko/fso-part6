import { useDispatch } from "react-redux"
import { filter } from "../reducers/filterReducer"
import { useState } from "react"

const Filter = () => {
    const [filterText, setFilterText] = useState('')
    
    const dispatch = useDispatch()

    const filterAnecdotes = (event) => {
        dispatch(filter(event.target.value))
        setFilterText(event.target.value)
    }
    
    return (
        <input type="text" value={filterText} onChange={(e) => filterAnecdotes(e)} />
    )
}

export default Filter