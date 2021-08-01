import Card from "../UI/Card"
import Button from "../UI/Button"
import {Link} from 'react-router-dom'
export default function NotFound(){
    return(
        <Card>
            <h1>Not Found</h1>
            <Button><Link to='/'>Go Back</Link></Button>
        </Card>
    )
}