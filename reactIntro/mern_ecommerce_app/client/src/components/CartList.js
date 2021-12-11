import { cartDeleteView, cartListView } from "../store/CartStore"
import {useSelector, useDispatch} from 'react-redux'
import {Card, Button} from 'react-bootstrap'
import { useEffect, useState } from "react"
export const CartList = () => {
    
    const carts = useSelector(state => state.cart.carts)
    const dispatch = useDispatch()

    console.log(carts)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadCarts = async () => {
            await dispatch(cartListView())
            setLoading(false)
        }
        loadCarts()
    },[dispatch])

    const cartDeleteHandler = async (cartID) => {
        await dispatch(cartDeleteView(cartID))
    }
    
    return !loading ? carts.length > 0 && carts.map(cart => {
        return(
            <Card key={cart._id}>
                <p>{cart._id}</p>
                {cart.courses.length > 0 && cart.courses.map(course => <Card key={course._id}><p>{course._id} {course.title} {course.price} {course.description}</p></Card>)}
                <Button onClick={() => cartDeleteHandler(cart._id)}>Delete</Button>
            </Card>
        )
    }) : '...Loading'
}