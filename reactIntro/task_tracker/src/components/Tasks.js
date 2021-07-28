import { Task } from "./Task"
import {Col, ListGroup, Row } from 'react-bootstrap'


export function Tasks(props){

    // console.log(props)
    return(

        // <div className="row">
        //     <div className="col"> 
        //     {
        //         props.tasks.map((task) => <Task key={task.id} task={task} deleteTask={props.deleteTask}/>)
        //     }
        //     </div>
        // </div>

        <Row>
            <Col>
            <ListGroup>
            {
                props.tasks.map((task) => <Task key={task.id} task={task} deleteTask={props.deleteTask}/>)
            }
            </ListGroup>
            </Col>
        </Row>
    )
}