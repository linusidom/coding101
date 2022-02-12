import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Restaurant } from './Restaurant'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { restaurantListView, restaurantSearchView } from '../store/RestaurantStore'
import { SearchForm } from './SearchForm'
export const Restaurants = () => {
    
    const restaurants = useSelector(state => state.restaurant.restaurants)
    
    const dispatch = useDispatch()
   
    

    const nextHandler = async () => {
        const nextPage = restaurants.page + 1
        await dispatch(restaurantListView(nextPage))
    }

    const prevHandler = async () => {
        const prevPage = restaurants.page - 1
        await dispatch(restaurantListView(prevPage))
    }

        


    return(
        <div className='container'>
            <h3 className='ms-5 mt-4 restTitle'>Restaurants</h3>
            <SearchForm/>
            {restaurants.restaurants.length > 0 && restaurants.restaurants.map(rest => <Restaurant key={rest._id} restaurant={rest}/>)}
            {restaurants.page === 0 ? <Button onClick={nextHandler}>Next</Button> : 
            
                <div>
                    <Button onClick={prevHandler}>Prev</Button> <Button onClick={nextHandler}>Next</Button> 
                </div>
            
            }
        </div>
    )
}