import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useSearchParams } from "react-router-dom"
import { productDetailView } from "../store/ProductStore"
import {Card} from 'react-bootstrap'
import { LoadingSpinner } from "./LoadingSpinner"

export const ProductDetail = () => {

    const {productID} = useParams()
    console.log(productID)

    const product = useSelector(state => state.product.product)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const productDetail = async () => {

            await dispatch(productDetailView(productID))
            setLoading(false)
        }

        productDetail()

    }, [])

    return(
        !loading ? 
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
            </div>
        </Card> : <LoadingSpinner/>
    )
}