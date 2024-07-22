import { useDispatch, useSelector } from 'react-redux'
import Blog from './Blog'

const Blogs = () => {
    const dispatch = useDispatch()
    const blogs = useSelector(state => state)

    return (
        <>
            {blogs.map(blog => 
                <Blog 
                    key={blog.id}
                    blog={blog}
                />
            )}
        </>
    )
}