import { useEffect, useState } from "react"
import {Link, useParams, useRouteMatch } from "react-router-dom"
import Card from "../UI/Card"
import Button from "../UI/Button"
import classes from './Item.module.css'
import data from '../data'
import { useSelector } from "react-redux"



export default function Item(props){

    // 1. React Loads the JSX Return code first
    // 2. useEffect runs
    // 3. useState/setItem rerenders the entire page again.


    const {birthdayID} = useParams()
    const match = useRouteMatch()

    const matchUrlPath = match.path === match.url

    const data = useSelector(state => state.item.items)

    let item = props.item
    if(birthdayID){
        item = data.find((item) => item.id === parseInt(birthdayID))
    }

    // const [item, setItem] = useState()

    // useEffect(() => {
    //     if(birthdayID){
    //         setItem( data.find((item) => item.id === parseInt(birthdayID)) )
    //     }
    //     else{
    //         setItem(props.item)
    //     }
    // },[])

    function ConditionalLink(props){
        return matchUrlPath ? <Link to={props.to}>{props.children}</Link> : props.children
    }

    return(
        <Card className={classes.item}>
            {item
            ?
            <>
            <div className={classes.image}>
                <img src={item.image}></img>
            </div>
            {/* <Link to={`/birthday/${item.id}`}>
                <div className={classes.text}>
                    <p className={classes.name}>{item.name}</p>
                    <p className={classes.age}>{item.age}</p>
                </div>
            </Link> */}

            <ConditionalLink to={`/birthday/${item.id}`} children={
                <div className={classes.text}>
                    <div className={classes.nameAge}>
                        <p className={classes.name}>{item.name}</p>
                        <p className={classes.age}>{item.age}</p>
                    </div>
                    <div className={classes.descDiv}>
                        {!matchUrlPath && <p className={classes.desc}>{item.desc}</p>}
                    </div>
                </div>}/>
            </>

            :
            'Not Found'
            
            }
            {!matchUrlPath ? <Button><Link to='/'>Go Back</Link></Button> : <Button onClick={() => props.deleteHandler(item.id)}>Delete</Button>}

        </Card>
    )
}