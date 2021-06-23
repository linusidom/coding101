import { useParams } from 'react-router-dom'
import data from '../store/data'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function UserDetail(){

    // useParams - Use Parameters and get all the elemnts from the URL after ":"
    // console.log(useParams())

    const {userID} = useParams()
    // console.log(typeof(userID))

    const user = data.filter((user) => {
        // console.log(typeof(user.id), user.id)
        // console.log(typeof(userID), userID)
        // parseInt changes a string to an integer
        return user.id === parseInt(userID)
    })[0]

    // find - returns and object
    // filter - returns an array

    // console.log(user)
    // [
    //     {
    //         "id": 1,
    //         "name": "Bertie Yates",
    //         "age": 29,
    //         "image": "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
    //     }
    // ]

    // console.log(data)

    return(
        <Container>
            <h1>User Detail</h1>
            <Card className='text-center p-5 shadow' style={{background:'#492ca4'}}>
            
            <img src={user.image} ></img>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <Button variant='info'><Link to='/users'>Go Back</Link></Button>
            </Card>
        </Container>
    )
}