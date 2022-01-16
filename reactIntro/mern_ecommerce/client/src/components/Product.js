import { useEffect, useState } from 'react'
import {Card, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cartAddView, cartRemoveView } from '../store/CartStore'
import { Link } from 'react-router-dom'

export const Product = ({product}) => {


    const cart = useSelector(state => state.cart.cart)
    
    const [productInCart, setProductInCart] = useState(cart.products.find(item => item._id === product._id))

    const user = useSelector(state => state.user)

    const [userOwnsAlready, setUserOwnsAlready] = useState('')

    useEffect( () => {

        if(user.authorized){
            setUserOwnsAlready(user.user.products.find(item => item._id === product._id))
        }
        

    }, [])

    const dispatch = useDispatch()

    const cartToggle = async () => {

        // if the item is in the cart already
        const inCart = cart.products.find(item => item._id === product._id)
        if(inCart){
            // Remove from the cart
            await dispatch(cartRemoveView(product))
            setProductInCart(false)
        } else {
            // Add to the cart
            await dispatch(cartAddView(product))
            setProductInCart(true)
        }
    }

    console.log(cart)

    return(
        <Card>
            <h3>Product</h3>
            <div className="row">
                <div className="col">
                    <img className='img-fluid' src={product.image} alt='productImage'/>
                </div>
                <div className="col">
                    <p>Title: {product.title}</p>
                    <p>Price: {product.price}</p>
                    <p>Description {product.description}</p>
                    <p>Paid Content: {product.paidContent}</p>
                </div>
                {
                    userOwnsAlready ? 
                        <div className="col">
                            <Link to={`/productDetail/${product._id}`}>Go to your product</Link>
                            
                        </div>
                    :
                        <div className="col">
                            <Button onClick={cartToggle}>{productInCart ? 'Remove From the Cart' : 'Add to the cart'}</Button>
                            
                        </div> 
                }

                
            </div>
        </Card>
    )
}