import classes from './Favorite.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { favoritesSliceActions } from '../store/FavoritesStore';

export default function Favorite(props){

    const {tour} = props
    
    const [moreLess, setMoreLess] = useState(false)


    const dispatch = useDispatch()
    
    function removeFromFavorites(tourID){
        dispatch(favoritesSliceActions.removeFromFavorites(tourID))
    }

    return(
        <Card>
        <img src={tour.image} alt='tourImage'></img>
        <div className={classes.namePrice}>
            <p className={classes.name}>{tour.name}</p>
            <p className={classes.price}>${tour.price}</p>
        </div>
        <div className={classes.info}>
            <p className={classes.info}>{moreLess ? tour.info : tour.info.slice(0,100) + '...'}
                <button className={classes.moreLessButton} onClick={() => setMoreLess(!moreLess)}>Show {moreLess ? 'Less' : 'More'}</button>
            
            </p>
        </div>

        <Button className={classes.addToFavs} onClick={() => removeFromFavorites(tour.id)}>Remove From Favorites</Button>
        </Card>
    )
    
}
