import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../store/CartStore'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './Item.module.css'

export default function Item(props){
    
    const dispatch = useDispatch()
    
    function addToCart(item){
        const newItem = {
            ...item,
            quantity: item.quantity + 1,
            total: item.price * (item.quantity + 1)
        }

        dispatch(cartSliceActions.addToCart(newItem))
    }


    return(
        <Card className={classes.item}>
            <div>
                <h1>{props.item.name}</h1>
                <p>{props.item.desc}</p>
            </div>
            <div>
                <p className={classes.price}>${props.item.price}</p>
                <Button onClick={() => addToCart(props.item)}>Add to Cart</Button>
            </div>
        </Card>
    )
}