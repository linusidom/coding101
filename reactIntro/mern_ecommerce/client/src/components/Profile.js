import {Card, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cardDeleteView } from '../store/CardStore'
import { AddCard } from './AddCard'
export const Profile = () => {
    
    const user = useSelector(state => state.user.user)

    const dispatch = useDispatch()

    const cardDeleteHandler = async (objectID, omiseCardID) => {
        const cardObj = {objectID, omiseCardID}
        await dispatch(cardDeleteView(cardObj))
    }

    return(
        <div>
        <Card>
            <h3>Profile</h3>
            <p>{user.username} {user.email} {user._id}</p>
        </Card>
        <Card>
            {user.cards.length > 0 ? 
                user.cards.map(card => {
                    return(
                        <div key={card._id} className='img-thumbnail'>
                        <p >{card.name} {card.last_digits} {card.expiration_month} / {card.expiration_year}</p>
                        <Button onClick={() => cardDeleteHandler(card._id, card.cardID)}>Delete</Button>
                        </div>
                    )
                })
            : <AddCard/>}
        </Card>
        </div>
    )
}