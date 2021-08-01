import { useSelector } from 'react-redux'
import Button from '../UI/Button'
import classes from './Header.module.css'

export default function Header(props){
    
    const cartQuantity = useSelector(state => state.cart.cartQuantity)


    function toggleCart(){
        console.log('Toggle with Redux')
    }
    
    return(
        <div className={classes.header}>
            <h1 className={classes.logo}>React Project</h1>
            <Button onClick={toggleCart}>Cart Items {cartQuantity}</Button>
        </div>
    )
}