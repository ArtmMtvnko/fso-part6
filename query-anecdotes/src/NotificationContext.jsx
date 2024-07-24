import { createContext, useContext, useReducer } from "react"

const notificationReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW':
            return action.payload
        case 'HIDE':
            return null
        default:
            return state
    }
}

const NotificationContext = createContext()

const displayNotificationDispatch = (dispatch) => {
    return (message, timeout) => {
        dispatch({
            type: 'SHOW',
            payload: message
        })
        setTimeout(() => {
            dispatch({ type: 'HIDE' })
        }, timeout)
    }
}

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, null)

    return (
        <NotificationContext.Provider
            value={[notification, displayNotificationDispatch(notificationDispatch)]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotificationValue = () => {
    const notificationContext = useContext(NotificationContext)
    return notificationContext[0]
}

export const useNotificationDispatch = () => {
    const notificationContext = useContext(NotificationContext)
    return notificationContext[1]
}

export default NotificationContext