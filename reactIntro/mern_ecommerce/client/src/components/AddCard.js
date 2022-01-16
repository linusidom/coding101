import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {alertSliceActions} from '../store/AlertStore'
import { AlertComponent } from './AlertComponent'
import { cardCreateView } from '../store/CardStore'
import { useNavigate } from 'react-router-dom'

export const AddCard = () => {


    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [expiration_month, setExpirationMonth] = useState('')
    const [expiration_year, setExpirationYear] = useState('')
    const [security_code, setSecurityCode] = useState('')

    const dispatch = useDispatch()

    const nav = useNavigate()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(name !== '' && number !== '' && expiration_month !== '' && expiration_year !== '' && security_code !== ''){

            console.log(process.env.REACT_APP_OMISE_PUBLIC_KEY)
            window.Omise.setPublicKey(process.env.REACT_APP_OMISE_PUBLIC_KEY);
            

            const card = {name, number, expiration_month, expiration_year, security_code}

            window.Omise.createToken("card", card, async function (statusCode, response) {
                if (response.object === "error" || !response.card.security_code_check) {
                  // Display an error message.
                  var message_text = "SET YOUR SECURITY CODE CHECK FAILED MESSAGE";
                  if(response.object === "error") {
                    message_text = response.message;
                  }
                  
                  dispatch(alertSliceActions.showAlert({message:message_text, variant:'danger'}))

                } else {
                  console.log(response)
                    const result = await dispatch(cardCreateView({token:response.id}))
                    if(result){
                        nav('/checkout')
                    }

                };
              });



        } else {
            dispatch(alertSliceActions.showAlert({message:'All fields must be filled in', variant:'danger'}))            
        }
    }

    return(
        <div>

            <h3>Add Card</h3>
            <AlertComponent/>
        
            <Form onSubmit={onSubmitHandler}>
                
                <div id="token_errors"></div>

                

                <div>
                    Name<br/>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    Number<br/>
                    <Form.Control type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
                </div>
                <div>
                    Date<br/>
                    <Form.Control type="text" value={expiration_month} size="4" onChange={(e) => setExpirationMonth(e.target.value)}/> /
                    <Form.Control type="text" value={expiration_year} size="8" onChange={(e) => setExpirationYear(e.target.value)}/>
                </div>
                <div>
                    Security Code<br/>
                    <Form.Control type="text" value={security_code} size="8" onChange={(e) => setSecurityCode(e.target.value)}/>
                </div>

                <Button type="submit">Add Card</Button>
            </Form>
        </div>
    )
}