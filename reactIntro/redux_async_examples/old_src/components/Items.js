import { useSelector } from 'react-redux'
import Item from './Item'

export default function Items(props){
    
    const items = useSelector(state => state.item.items)


    return items.map((item) => <Item key={item.id} item={item}/>)
}