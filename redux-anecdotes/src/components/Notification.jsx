import { useSelector } from "react-redux"

const Notification = () => {
    const notification = useSelector(state => state.notification)
    
    const styles = {
        border: '2px solid gray',
        padding: 10
    }

    if (notification === '') return null

    return (
        <div style={styles}>
            <h3>{notification}</h3>
        </div>
    )
}

export default Notification