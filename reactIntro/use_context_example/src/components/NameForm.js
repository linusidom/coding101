import { useContext, useRef } from "react";
import { Form, InputGroup, Button, FormControl } from "react-bootstrap";
import { NamesContext } from "../store/NamesContext";

export default function NameForm(){

    // console.log(props)

    const namesCtx = useContext(NamesContext)

    const name = useRef('')

    function onSubmitHandler(event){
        console.log('Form Submitted')
        event.preventDefault()
        // console.log(name.current.value)
        // e.target.value
        if(name.current.value !== ''){
            console.log(name.current.value)

            const newName = {
                id: Math.floor(Math.random() * 100) + 1,
                name: name.current.value
            }
            namesCtx.addName(newName)
            name.current.value = ''
        }

    }

    return(
        <Form onSubmit={onSubmitHandler}>
            <InputGroup>
                <FormControl type='text' placeholder='Enter Name' ref={name} /> 
                <Button type='Submit'>Submit Name</Button>
            </InputGroup>
        </Form>
    )
}