import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../store/CartStore'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './Item.module.css'

export default function Item(props){
    
    const dispatch = useDispatch()
    
    function addToCart(item){
        console.log('clicked')
        dispatch(cartSliceActions(item))
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