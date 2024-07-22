const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'FILTER':
            return action.payload.text
        default:
            return state
    }
}

export default filterReducer