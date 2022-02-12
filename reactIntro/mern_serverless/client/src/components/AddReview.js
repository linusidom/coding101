import { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { restaurantSearchView } from '../store/RestaurantStore'
import { reviewCreateView } from '../store/ReviewStore'
import { Login } from './Login'

export const AddReview = ({restID}) => {

    const dispatch = useDispatch()

    const [reviewText, setReviewText] = useState('')
    const user = useSelector(state => state.user)

    console.log(user)

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(reviewText !== ''){

            const reviewObj = {
                restaurant_id: restID,
                text: reviewText,
                name: user.user.username,
                _id: user.user._id,
                
            }
            await dispatch(reviewCreateView(reviewObj))
        }
    }

    return(
        <div className='mx-5 mt-4' >
            {user.authorized ? 

                <Form onSubmit={onSubmitHandler}>
                    <InputGroup>
                        <Form.Control type='text' placeholder='Add A review' value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                        <Button type='submit' variant='outline-primary'>Add Review</Button>
                    </InputGroup>
                </Form>

            : 
                
                <Login/>
            
            }
            
        </div>
    )
}


// const restID = req.body.restaurant_id
//         const userReview = req.body.text
//         const userInfo = {
//             name: req.body.name,
//             _id: req.body.user_id
//         }