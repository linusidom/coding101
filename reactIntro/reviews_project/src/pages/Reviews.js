import Review from '../components/Review'
import { useDispatch, useSelector } from 'react-redux'
import { reviewSliceActions } from '../store/ReviewStore'

// if using firebase
// import { getDataFromFirebase } from '../store/ReviewStore'

export default function Reviews(){


    // The following is not part of the project but
    // just to show how to add data to firebase and
    // what to watch out for

    // const url = 'https://reviews-64824-default-rtdb.firebaseio.com/reviews.json'

    // useEffect(() => {


        // function loadDataIntoFirebase(item){
        //     fetch(url, {
        //         method: 'POST',
        //         headers:{
        //             'Content-type':'application/json'
        //         },
        //         body: JSON.stringify(item)
        //     })
        // }

        // data.forEach(item => loadDataIntoFirebase(item))

        // fetch(url, {
        //     method: 'POST',
        //     headers:{
        //         'Content-type':'application/json'
        //     },
        //     body: JSON.stringify({testData:'New Data'})
        // })
        

    // }, [])


    // useEffect(() => {
    //     dispatch(getDataFromFirebase())
    // }, [])




























    const dispatch = useDispatch()
    
    // Call from the Redux store
    const reviews = useSelector(state => state.review.reviews)
    // console.log('Reviews from Redux', reviews)

    // We can replace this with our review from the Redux Store
    // const [review, setReview] = useState(reviews[0])
    const review = useSelector(state => state.review.review)


    // if using firebase
    // const initial = useSelector(state => state.review.initial)
    // if(initial){
    //     dispatch(getDataFromFirebase())

    // }

    

    function surpriseMe(){
        // console.log('surprise me')
        // Random Number
        const nextReviewID = Math.floor(Math.random() * reviews.length)
        
        // We can change setState/useState methods to dispatch methods
        // setReview(reviews[nextReviewID])
        dispatch(reviewSliceActions.surpriseMe(nextReviewID))

    }

    function nextReview(reviewID){
        // console.log('next Review')
        // If we have an array we don't want to rely on the ID number
        // We should really rely on the position
        const indexOf = reviews.indexOf(reviews.find(review => review.id === reviewID))
        const nextReviewID = indexOf === -1 || indexOf === reviews.length - 1 ? 0 : indexOf + 1
        
        // We can change this setState method to dispatch
        // setReview(reviews[nextReviewID])
        dispatch(reviewSliceActions.nextReview(nextReviewID))
    }

    function previousReview(reviewID){
        // console.log('previousReview')
        const indexOf = reviews.indexOf(reviews.find(review => review.id === reviewID))
        const nextReviewID = indexOf === -1 || indexOf ===  0 ? reviews.length - 1 : indexOf - 1
        // setReview(reviews[nextReviewID])
        dispatch(reviewSliceActions.previousReview(nextReviewID))
    }


    return(
        <div>
            <h1>Reviews Project</h1>
            {/* {data.map(review => <Review key={review.id} review={review}/>)} */}
            <Review review={review} surpriseMe={surpriseMe} nextReview={nextReview} previousReview={previousReview}/>
        </div>
    )
}