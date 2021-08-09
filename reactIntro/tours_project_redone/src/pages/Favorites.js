import { useSelector } from "react-redux"
import Favorite from "../components/Favorite"
import {Link} from 'react-router-dom'

export default function Favorites(){
    
    const favorites = useSelector(state => state.favorites.favorites)

    
    return(
        <div>
            <h1>Favorites</h1>
            {favorites.length < 1 && <p>Go Back and <Link to='/'>Add Some Favorites</Link></p>}
            {favorites.map((tour) => <Favorite key={tour.id} tour={tour}/>)}
        </div>
    )
}