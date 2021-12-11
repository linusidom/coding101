import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { cartAddView, cartRemoveView } from "../store/CartStore"
import { courseDeleteView } from "../store/CourseStore"
import {Navigate, useNavigate} from 'react-router-dom'


export const Course = ({course}) => {
    
    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart.cart)
    const [inCart, setInCart] = useState(false)

    const dispatch = useDispatch()

    const nav = useNavigate()

    const courseDeleteHandler = async () => {
        const token = localStorage.getItem('token')
        await dispatch(courseDeleteView(token, course._id))
    }

    console.log(cart)

    useEffect(()=> {
        setInCart(cart.courses && cart.courses.find(item => item._id === course._id))
    },[cart.courses, course._id])

    const addToCart = async () => {
        const token = localStorage.getItem('token')
        // if(user.authorized && token){
        //     await dispatch(cartAddView(token, cart, course))
        //     setInCart(true)
        // } else {
        //     nav('/login?next=/courses')
        // }

        await dispatch(cartAddView(token, cart, course))
            setInCart(true)

        
    }
    const removeFromCart = async () => {
        const token = localStorage.getItem('token')
        // if(user.authorized && token){
        //     await dispatch(cartRemoveView(token, cart, course))
        //     setInCart(false)
        // } else {
        //     nav('/login?next=/courses')
        // }

        await dispatch(cartRemoveView(token, cart, course))
        setInCart(false)
    }
    
    return(
        <Card className='courseCard'>
            <img src={course.image} alt='anotherImage' />
            <div className='text-center'>
                <p>{course.title}</p>
                <p>{course.description}</p>
                <p>Cat {course.category}</p>
                <Button onClick={inCart ? removeFromCart : addToCart}>{inCart ? 'Remove':'Add'}</Button>
                
                <Button variant='outline-danger' onClick={courseDeleteHandler}>Delete</Button>
            </div>
        </Card>
    )
}