import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { restaurantSearchView } from '../store/RestaurantStore'

export const SearchForm = () => {

    const dispatch = useDispatch()

    const [query, setQuery] = useState('')


    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(query !== ''){
            await dispatch(restaurantSearchView(query, 'name'))
        }
    }

    return(
        <div className='mx-5 mt-4' >
            <Form onSubmit={onSubmitHandler}>
                <InputGroup>
                    <Form.Control type='text' placeholder='Search for A Restaurant by name' value={query} onChange={(e) => setQuery(e.target.value)} />
                    <Button type='submit' variant='outline-primary'>Search</Button>
                </InputGroup>

            </Form>
        </div>
    )
}