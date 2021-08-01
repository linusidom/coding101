import data from '../data'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './Items.module.css'
import Item from './Item'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemSliceActions } from '../store/ItemStore'

export default function Items(){

    // const [items, setItems] = useState(data)


    // function clearAllHandler(){
    //     setItems([])
        
    // }

    // function loadAllHandler(){
    //     setItems(data)
    
    // }

    // function deleteHandler(itemID){
    //     setItems(prevItems => prevItems.filter((item) => item.id !== itemID))
    
    // }



    const items = useSelector(state => state.item.items)
    const dispatch = useDispatch()

    function clearAllHandler(){
        dispatch(itemSliceActions.clearItems())
    }

    function loadAllHandler(){
        dispatch(itemSliceActions.loadItems())
    }

    function deleteHandler(itemID){
        dispatch(itemSliceActions.deleteItem(itemID))
    }

    return(
        <Card className={classes.items}>
            <h2>{items.length} Birthdays Today</h2>
            {items.map((item) => <Item key={item.id} item={item} deleteHandler={deleteHandler}/>)}
            <div className={classes.buttons}>
                <Button className={classes.clearAllButton} onClick={items.length === 0 ? loadAllHandler : clearAllHandler}>{items.length === 0 ? 'Load Data' : 'Clear All'}</Button>
            </div>
        </Card>
    )
}