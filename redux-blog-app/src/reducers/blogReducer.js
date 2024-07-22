const blogReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_BLOG':
            return [...state, action.payload]
        case 'LIKE_BLOG': {
            const id = action.payload.id
            return state.map(blog => {
                return blog.id !== id
                    ? blog
                    : {
                        ...blog,
                        likes: blog.likes + 1
                    }
            })
        }
        default:
            return state
    }
}

export default blogReducer