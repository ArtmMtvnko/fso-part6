import blogReducer from './blogReducer'
import deepFreeze from 'deep-freeze'

describe('noteReducer', () => {
    test('returns new state with action NEW_BLOG', () => {
        const state = []
        const action = {
            type: 'NEW_BLOG',
            payload: {
                id: 1,
                title: 'test title',
                author: 'test author',
                url: 'http://testURL.com',
                likes: 10,
                user: 'test user'
            }
        }

        deepFreeze(state)
        const newState = blogReducer(state, action)

        expect(newState).toHaveLength(1)
        expect(newState).toContainEqual(action.payload)
    })

    test('blog can be liked', () => {
        const state = [
            {
                id: 11,
                title: 'test title',
                author: 'test author',
                url: 'http://testURL.com',
                likes: 110,
                user: 'test user'
            },
            {
                id: 12,
                title: 'test title',
                author: 'test author',
                url: 'http://testURL.com',
                likes: 120,
                user: 'test user'
            },
            {
                id: 13,
                title: 'test title',
                author: 'test author',
                url: 'http://testURL.com',
                likes: 130,
                user: 'test user'
            },
        ]

        const action = {
            type: 'LIKE_BLOG',
            payload: {
                id: 12
            }
        }
        
        deepFreeze(state)
        const newState = blogReducer(state, action)

        expect(newState).toHaveLength(3)
        expect(newState).toContainEqual({
            id: 12,
            title: 'test title',
            author: 'test author',
            url: 'http://testURL.com',
            likes: 121,
            user: 'test user'
        })
    })
})