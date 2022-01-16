import { Card, Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"







export const ProductTable = () => {

    const cart = useSelector(state => state.cart.cart)


    return(
        <Table striped bordered hover variant="dark">
        <thead>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {cart.products.length > 0 ?  
            cart.products.map((product, index) => {
                return(
                    <tr key={product._id}>
                        <td>{index + 1}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                    </tr>
                )
            })
        :  
        <Card>
            <h3>There are no products in your cart yet...<Link to='/products'>Would you like to add some?</Link></h3>
        </Card>
        }
        
        
        </tbody>
    </Table>
    )
}