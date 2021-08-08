import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSliceActions } from '../store/ToggleStore'
import Button from '../UI/Button'
import Notification from '../UI/Notification'
import classes from './Header.module.css'

export default function Header(props){
    
    const cartQuantity = useSelector(state => state.cart.cartQuantity)
    const notification = useSelector(state => state.toggle.notification)
    const showNotification = useSelector(state => state.toggle.showNotification)
    // console.log(notification)
    const dispatch = useDispatch()

    function toggleCart(){
        dispatch(toggleSliceActions.toggleCart())
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(toggleSliceActions.closeNotification())
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }


    }, [dispatch])
        
    return(
        <div>
            {notification && showNotification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
            <div className={classes.header}>
                <h1 className={classes.logo}>React Project</h1>
                <Button onClick={toggleCart}>Cart Items {cartQuantity}</Button>
            </div>
        </div>
    )
}