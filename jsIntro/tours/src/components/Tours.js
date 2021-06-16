import Tour from './Tour'

export default function Tours(props){
    // console.log(props)
    return (
        <>
        {props.tours.map((tour) => 
        <Tour key={tour.id} tour={tour} deleteTour={props.deleteTour}/>
        )}
        </>
    )
    
}