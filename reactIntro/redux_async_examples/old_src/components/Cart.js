import { useDispatch, useSelector } from 'react-redux'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './Cart.module.css'
import { cartSliceActions } from '../store/CartStore'
export default function Cart(){

    const cartItems = useSelector(state => state.cart.cartItems)
    const cartTotal = useSelector(state => state.cart.cartTotal)

    const dispatch = useDispatch()

    function addToCart(item){
        const newItem = {
            ...item,
            quantity: item.quantity + 1,
            total: item.price * (item.quantity + 1)
        }

        dispatch(cartSliceActions.addToCart(newItem))
    }

    function removeFromCart(item){
        dispatch(cartSliceActions.removeFromCart(item))
    }

    return(
        <Card className={classes.cart}>
            <h1>Your Shoppint Cart</h1>



            {cartItems.map((item) => {
                return(
                <Card className={classes.subCart} key={item.id}>
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.quantity}</p>
                    </div>
                    <div>
                        <p>${item.total} (${item.price}/item)</p>
                        <div className={classes.buttons}>
                            <Button onClick={() => removeFromCart(item)}>-</Button>
                            <Button onClick={() => addToCart(item)}>+</Button>
                        </div>    
                    </div>
                </Card>
                )
            })}
            {cartItems.length > 0 && <p>{cartTotal}</p>}
        </Card>
    )
}