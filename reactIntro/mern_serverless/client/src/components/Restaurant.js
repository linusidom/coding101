import { Link } from "react-router-dom"

export const Restaurant = ({restaurant}) => {
    
    return(
        <div className="card">
            <Link to={`/detail/${restaurant._id}`}><h4>{restaurant.name} - {restaurant.cuisine}</h4></Link>
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
        </div>
    )
}