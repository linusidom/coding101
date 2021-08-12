import { useRef } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './CreateForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { createDataInFirebase } from '../store/ReviewStore'
import { useHistory } from 'react-router-dom'

export default function CreateForm(){


    const reviews = useSelector(state => state.review.reviews)
    const dispatch = useDispatch()


    // Real quick utility to go back to a certain page
    const history = useHistory()

    const name = useRef()
    const job = useRef()
    const text = useRef()
    const image = useRef()

    function onSubmitHandler(e){
        e.preventDefault()

        const newReview = {
            name: name.current.value,
            job: job.current.value,
            image: image.current.value,
            text: text.current.value,
            id: reviews.length + 1
        }

        // console.log(newReview)
        // dispatch(reviewSliceActions.createReview(newReview))
        dispatch(createDataInFirebase(newReview))
        history.push('/')
    }

    return(
        <Card>
            <h1>Create Form</h1>
            <form onSubmit={onSubmitHandler}>
                <input className={classes.inputField} type='text' placeholder='Enter your name' ref={name}></input>
                <input className={classes.inputField} type='text' placeholder='Enter your job' ref={job}></input>
                <input className={classes.inputField} type='text' placeholder='Enter your image' ref={image} value='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg' readOnly></input>
                <textarea className={classes.textarea} ref={text}></textarea>


                <Button type='submit'>Submit</Button>
            </form>
            
        </Card>
    )
}