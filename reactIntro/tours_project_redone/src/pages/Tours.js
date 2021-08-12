import Tour from '../components/Tour'
import Button from '../UI/Button'
import {useSelector, useDispatch} from 'react-redux'
import { getToursFetchFunction, tourSliceActions } from '../store/TourStore'
import AlertComponent from '../components/AlertComponent'

export default function Tours(props){


    const tours = useSelector(state => state.tour.tours)
    const initial = useSelector(state => state.tour.initial)

    const dispatch  = useDispatch()
  
    // const [isLoading, setIsLoading] = useState(false)
    const isLoading = useSelector(state => state.notification.isLoading)

    const somethingWrong = useSelector(state => state.notification.somethingWrong)

    // useEffect(() => {
    //   dispatch(getToursFetchFunction())
    // }, [])
  
    if(initial){
      dispatch(getToursFetchFunction())
    }

    function deleteHandler(tourID){
      dispatch(tourSliceActions.deleteTour(tourID))
    }
  
    function refreshData(){
      dispatch(getToursFetchFunction())
    }  

    return (
    <div>
        {somethingWrong ? <AlertComponent message={somethingWrong}/> : 

        isLoading ? <h1 className='isLoadingText'>Loading...</h1>
        
        : 
        <div>
        <h1>Tours</h1>
        {tours.length < 1 && <Button onClick={refreshData}>Refresh</Button>}
        {tours.map((tour) => <Tour key={tour.id} tour={tour} deleteHandler={deleteHandler}/>)}
        </div>
        }
    
    </div>
  
  )
    
    // return 
    
}