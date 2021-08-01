import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './Cart.module.css'

export default function Cart(props){
    return(
        <Card className={classes.cart}>
            <h1>Your Shoppint Cart</h1>
            <Card className={classes.subCart}>
                <div>
                    <h1>Item Name</h1>
                    <p>Quantity from Redux</p>
                </div>
                <div>
                    <p>$18.00 ($6/item)</p>
                    <div className={classes.buttons}>
                        <Button>-</Button>
                        <Button>+</Button>
                    </div>    
                </div>
            </Card>
        </Card>
    )
}