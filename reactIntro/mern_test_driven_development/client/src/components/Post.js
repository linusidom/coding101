import { Card } from "react-bootstrap"
import {Link} from 'react-router-dom'
export const Post = (props) => {

    if(!props.post){
        return null
    }

    return(
        <Card role='postComponent'>
            <div className="row">
                <div className="col" >
                    <Link to={`/${props.post._id}`} role='linkComponent' className='linkComponent'><p role='postTitleComponent' className='postTitleComponent'>{props.post.title}</p></Link>
                </div>
                <div className="col">
                    <p role='postDescriptionComponent' className='postDescriptionComponent'>{props.post.description}</p>
                </div>
            </div>
        </Card>
    )
}