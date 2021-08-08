import Card from "../UI/Card"
import {Link} from 'react-router-dom'

export default function Project(props){

    function CustomLink(props) {
        return <p className='customLink'><Link to={props.to} target='_blank'>{props.children}</Link></p>
      }
    

    return(
        <Card>           
          <Link to={{pathname : props.project.netlifyLink}} target="_blank">
            <img src={props.project.imageLink} alt='taskTracker'></img> 
            <p>{props.project.title} {props.project.titleThai}</p>
          </Link>
          <div className='links'>
            {props.project.youtubeLink && <CustomLink to={{ pathname: props.project.youtubeLink}}>YouTube</CustomLink>}
            {props.project.githubLink && <CustomLink to={{ pathname: props.project.githubLink}}>GitHub</CustomLink>}
          </div>
        </Card>
    )
}