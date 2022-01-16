import { Card, Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ProductTable } from "./ProductTable"

export const Cart = () => {

    const cart = useSelector(state => state.cart.cart)

    return(
        <Card>
            <ProductTable/>
            <Link to='/checkout'>Proceed to Checkout</Link>
        </Card>
    )
}