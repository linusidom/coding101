import { Link, useRouteMatch } from 'react-router-dom'
// import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './QuoteItem.module.css'

export default function QuoteItem(props) {

    // const history = useHistory()

    const match = useRouteMatch()
    // console.log(match)

    // function detailPage(quoteID){
    //     history.push(`/quotes/${quoteID}`)
    // }

    return (
        <Card className={classes.quoteItem}>
            <div className={classes.quoteText}>
                <h1>{props.quote.text}</h1>
                <h4>{props.quote.author}</h4>
            </div>
            {/* {match.path === match.url && <Button onClick={() => detailPage(props.quote.id)}>Detail</Button>} */}
            {match.path === match.url && <Link className={classes.button} to={`/quotes/${props.quote.id}`}>Detail</Link>}
        </Card>
    )
}
