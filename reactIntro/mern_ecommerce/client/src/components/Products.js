import { useDispatch, useSelector } from 'react-redux'
import { Product } from './Product'


export const Products = () => {

    const products = useSelector(state => state.product.products)

    const dispatch = useDispatch()

    console.log(products)


    return products.length > 0 && products.map(product => <Product key={product._id} product={product}/>)
}