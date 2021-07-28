import { useState } from "react"
import { Form, InputGroup, FormControl, Button } from "react-bootstrap"


export function TaskForm(props){

    const [formData, setFormData] = useState('')
    function onSubmitForm(e){
        e.preventDefault()
        // console.log('Form Submitted')
        // console.log(formData)

        // Random Number for ID
        // Math.random = 0 - 1, not inclusive, decimal float 

        // console.log(Math.floor(Math.random() * 100 + 4))
        const newTask = {
        id: Math.floor(Math.random() * 100) + 4,
        text: formData,
        }
        if(formData !== '') {
            props.addTask(newTask)
            setFormData('')
        }
        
    }
    return(
        // <div>
        //     <form className='input-group my-5' onSubmit={onSubmitForm}>
        //     {/* You will self closing tags are most common in React */}
        //     <input type="text" placeholder="Enter a ToDo item" className='form-control' value={formData} onChange={(e) => setFormData(e.target.value)}/>
        //     <button className='btn btn-info'>Submit</button>
        //     </form>
        // </div>

        <Form>
            <InputGroup className="mb-3">
                <FormControl placeholder="Enter Task" value={formData} onChange={(e) => setFormData(e.target.value)}/>
                <Button variant='info' onClick={onSubmitForm}>Submit</Button>
            </InputGroup>
        </Form>
    )
}


// const Form = () => {

// }