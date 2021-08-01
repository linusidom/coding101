// import data from '../data'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './Item.module.css'
import {Link, useParams, useRouteMatch} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Item(props){

    const {birthdayID} = useParams()
    const match = useRouteMatch()

    const routeMatch = match.url === match.path

    const [item, setItem] = useState()

    const data = useSelector(state => state.item.items)

    useEffect(() => {
        if(birthdayID){
            setItem(data.find((item) => item.id === parseInt(birthdayID)))
        }
        else{
            setItem(props.item)
        }
    }, [])


    function ConditionalLink({to, children}){
        return routeMatch ? <Link to={to}>{children}</Link> : children
    }

    

    return(
        <Card className={classes.item}>
            

            {item ?
                
            <>
                <div className={classes.image}>
                    <img src={item.image} alt=''></img>
                </div>
                <div className={classes.text}>
                    {/* <Link to={`/birthday/${item.id}`}>
                        <p className={classes.name}>{item.name}</p>
                        <p className={classes.age}>{item.age}</p>
                    </Link> */}
                    <ConditionalLink to={`/birthday/${item.id}`} children={
                        <>
                        <div className={classes.ageNameDiv}>
                            <p className={classes.name}>{item.name}</p>
                            <p className={classes.age}>{item.age}</p> 
                        </div>
                        <div className={classes.descDiv}>
                            {!routeMatch && <p className={classes.desc}>{item.desc}</p>}
                        </div>
                        </>}/>
                </div>
            </>
            :
            'Not Found'
            }
            
            {routeMatch ? <Button onClick={()=>props.deleteHandler(item.id)}>Delete</Button> : <Button><Link to='/'>Go Back</Link></Button>}
        </Card>
    )
}