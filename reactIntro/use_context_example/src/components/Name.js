import { useContext } from "react"
import { Card, Row, Col, Button } from "react-bootstrap"
import { NamesContext } from "../store/NamesContext"

export default function Name(props){
    console.log(props)


    const namesCtx = useContext(NamesContext)


    return(
        <Card className='my-4 p-3'>
            <Row>
                <Col>{props.name.name}</Col>
                <Col className='text-end'><Button variant='danger' onClick={() => namesCtx.deleteName(props.name.id)}>Delete</Button></Col>
            </Row>
        </Card>
    )
}