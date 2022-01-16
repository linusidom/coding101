import { Card, Placeholder, Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ProductTable } from "./ProductTable"
import { Navigate } from "react-router-dom"
import { AddCard } from "./AddCard"
import { PlaceOrder } from "./PlaceOrder"

export const Checkout = () => {

    const cart = useSelector(state => state.cart.cart)

    const user = useSelector(state => state.user.user)

    if(cart.products.length < 1) {
        return <Navigate to='/products'/>
    } else {
        return(
            <Card>
                <ProductTable/>
                {user.cards.length < 1 ? 
                    <AddCard/>
                : 
                    <PlaceOrder/>                   
                }
            </Card>
        )
    }



    
}