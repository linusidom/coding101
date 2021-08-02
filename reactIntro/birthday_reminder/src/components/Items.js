import Item from './Item'
import data from '../data'
import { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { itemSliceAction } from '../store/ItemStore'

export default function Items(props){

    


    const items = useSelector(state => state.item.items)
    // const [items, setItems] = useState(data)

    const dispatch = useDispatch()

    function clearItemsHandler(){
        dispatch(itemSliceAction.clearItems())
    }

    function loadItemsHandler(){
        dispatch(itemSliceAction.loadItems())
    }

    function deleteHandler(itemID){
        dispatch(itemSliceAction.deleteItems(itemID))
    }
    
    // function clearItemsHandler(){
    //   setItems([])
    // }

    // function loadItemsHandler(){
    //     setItems(data)
    // }

    // function deleteHandler(itemID){
    //     setItems(prevItems => prevItems.filter((item) => item.id !== itemID))
    // }
    
    return (
        
    <Card>
      <h1>{items.length} Birthdays Today</h1>
        {items.map((item) => <Item key={item.id} item={item} deleteHandler={deleteHandler}/>)}
      <div className='clearButton'>
        <Button onClick={items.length === 0 ? loadItemsHandler : clearItemsHandler}>{items.length === 0 ? 'Load Birthdays' : 'Clear All'}</Button>
      </div>
    </Card>
        
        
        
        
        )
}