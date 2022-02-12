import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { restaurantDetailView } from "../store/RestaurantStore"
import { AddReview } from "./AddReview"

export const RestaurantDetail = () => {

    const restaurant = useSelector(state => state.restaurant.restaurant)
    const dispatch = useDispatch()

    console.log(restaurant)
    const {id} = useParams()

    // console.log(id)
    const [loading, setLoading] = useState(true)


    useEffect(()=> {

        const restaurantDetail = async () => {
            await dispatch(restaurantDetailView(id))
            setLoading(false)
        }

        restaurantDetail()

    },[dispatch])
    
    return(
        <div className="card">
            {!loading ?
                
                <>
                    <h4>{restaurant.name} - {restaurant.cuisine}</h4>
                    <div className="row">
                        <div className="col">
                            <h5>{restaurant.borough}</h5>
                            <p>{restaurant.address.street}</p>
                            <p>{restaurant.address.zipcode}</p>
                        </div>
                    
                        <div className="col">
                            <h5>Grade</h5>
                            {restaurant.grades && restaurant.grades.length > 0 && restaurant.grades.map((grade, index) => {
                                return(
                                    <p className='m-0' key={index}>{grade.grade} {grade.score}</p>
                                )
                            })}
                        </div>
                    </div>
                    <Card>
                        <AddReview restID={restaurant._id}/>
                    </Card>
                </>
            :
            '...Loading'
            
            }
            
        </div>
    )
}