import classes from './Tour.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoritesSliceActions } from '../store/FavoritesStore';

export default function Tour(props){

    const {tour} = props
    
    const [moreLess, setMoreLess] = useState(false)    
    
    const favorites = useSelector(state => state.favorites.favorites)
    const inFavorites = favorites.find((fav) => fav.id === tour.id)


    const dispatch = useDispatch()

    function addToFavorites(tour){
        dispatch(favoritesSliceActions.addToFavorites(tour))
    }
    
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

        <Button onClick={() => props.deleteHandler(tour.id)}>Not Interested</Button>
        <Button className={classes.addToFavs} onClick={inFavorites ? ()=>removeFromFavorites(tour.id) : () => addToFavorites(tour)}>{inFavorites ? 'Remove From Favorites':'Add to Favorites'}</Button>
        </Card>
    )
    
}
