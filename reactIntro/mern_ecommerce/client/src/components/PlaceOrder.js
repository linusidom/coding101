import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { cardChargeView } from "../store/CardStore"
import { cartGetView } from "../store/CartStore"
import { orderCreateView } from "../store/OrderStore"
import { userAddProductView } from "../store/UserStore"
import { AddCard } from "./AddCard"

export const PlaceOrder = () => {
    
    const cart = useSelector(state => state.cart.cart)
    const user = useSelector(state => state.user.user)

    const dispatch = useDispatch()

    const nav = useNavigate()

    const [cardNumber, setCardNumber] = useState(user.cards[0].cardID)

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        console.log(cardNumber)
        // Charge the card

        const chargeCard = await dispatch(cardChargeView(cart))
        if(chargeCard){
            // Create the order and update it with the user and chargeID
            const orderPlaced = await dispatch(orderCreateView(cart))
            if(orderPlaced){
                // Update the user with the products
                const addProduct = await dispatch(userAddProductView(cart))
                if(addProduct){
                    // Clear the cart
                    console.log('clear the cart')
                    dispatch(cartGetView())
                    nav('/profile')
                    
                }
            }
        }
    }

        
    
    return(
        <div>
            <Form onSubmit={onSubmitHandler}>
                <Form.Select aria-label="Default select example" onChange={(e) => setCardNumber(e.target.value)}>
                    <option disabled>Open this select menu</option>
                    {user.cards.map(card => {
                        return <option key={card._id} value={card.cardID}>{card.name} {card.last_digits} {card.expiration_month} / {card.expiration_year}</option>
                    })}
                    
                </Form.Select>

                <Button type='submit'>Place Order</Button>
            </Form>
            OR
            <AddCard/>
        </div>

    )
}