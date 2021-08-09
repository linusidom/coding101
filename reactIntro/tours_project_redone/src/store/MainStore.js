import {configureStore} from '@reduxjs/toolkit'
import tourReducer from './TourStore'
import favoritesReducer from './FavoritesStore'
import notificationReducer from './NotificationStore'

const store = configureStore({
    reducer:{
        tour: tourReducer,
        favorites: favoritesReducer,
        notification: notificationReducer
    }
})

export default store