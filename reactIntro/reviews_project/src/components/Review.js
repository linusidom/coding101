import classes from './Review.module.css'
import Button from '../UI/Button'
import Card from '../UI/Card'
import {FaAngleRight, FaAngleLeft, FaQuoteRight} from 'react-icons/fa'

export default function Review(props){
    return(
        <Card>
            <div className={classes.imageTextDiv}>
                <div className={classes.imageDiv}>
                    <img className={classes.image} src={props.review.image} alt='ImageText'></img>
                    <span className={classes.quote}><FaQuoteRight/></span>
                </div>
                <div className={classes.info}>
                    <p className={classes.name}>{props.review.name}</p>
                    <p className={classes.job}>{props.review.job}</p>
                    <p className={classes.text}>{props.review.text}</p>
                </div>
            </div>
            <div className={classes.leftRight}>
                <Button onClick={() => props.previousReview(props.review.id)}><FaAngleLeft/></Button>
                <Button onClick={() => props.nextReview(props.review.id)}><FaAngleRight/></Button>
            </div>
            <Button onClick={props.surpriseMe}>Surprise Me</Button>
        </Card>
    )
}