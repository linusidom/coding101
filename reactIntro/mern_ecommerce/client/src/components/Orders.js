import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { orderListView, orderSliceActions } from "../store/OrderStore"
import {Card, Table} from 'react-bootstrap'

export const Orders = () => {
    
    const orders = useSelector(state => state.order.orders)
    
    const dispatch = useDispatch()

    useEffect(() => {

        const orderList = async () => {
            await dispatch(orderListView())
        }

        orderList()

    }, [dispatch])

    // console.log(orders)

    return(
        <Table striped bordered hover variant="dark">
        <thead>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {orders.length > 0 && 
            orders.map((order, index) => {

                return(
                    <tr key={order._id}>
                        <td>{index + 1}</td>
                        <td>{order.user}</td>
                        <td>{order.omiseChargeID}</td>
                        <td>{order.orderTotal}</td>
                    </tr>
                )
            })

        }

        
        
        </tbody>
    </Table>
    )
}