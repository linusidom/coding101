import {Button, Col, ListGroup, Row } from 'react-bootstrap'
import './custom.css'
export function Task(props){

    // console.log(props)
    return(
        // <div className="row  my-3" key={props.task.id}>
        //     <div className="col">
        //         <h3> { props.task.text} </h3>
        //     </div>
        //     <div className="col text-end">
        //         <button className='btn btn-danger' onClick={ () => props.deleteTask(props.task.id)}>Delete</button>
        //     </div>	
        // </div>

        <ListGroup.Item>
            <Row>
            <Col>
                <h3> { props.task.text} </h3>
            </Col>
            <Col className='text-end'>
                <Button variant='danger' onClick={ () => props.deleteTask(props.task.id)}>Delete</Button>
            </Col>
            </Row>
        </ListGroup.Item>
    )
}