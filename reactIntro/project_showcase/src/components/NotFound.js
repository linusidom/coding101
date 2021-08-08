import { Link } from "react-router-dom"
export default function NotFound(){
    return (
        <div className='notFound'>
            <h1>Error 404 Not Found <span><Link to='/'>Go Back</Link></span></h1>
        </div>
    )
        
}