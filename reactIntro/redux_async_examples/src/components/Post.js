import Card from '../UI/Card'

export default function Post(props){
    return(
        <Card>
            <h1>{props.post.title}</h1>
            <p>{props.post.body.slice(0,100)}</p>
        </Card>
    )
}