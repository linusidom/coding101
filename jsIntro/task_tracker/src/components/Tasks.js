import { Task } from "./Task"


export function Tasks(props){

    // console.log(props)
    return(
        <div className="row">
            <div className="col"> 
            {
                props.tasks.map((task) => <Task key={task.id} task={task} deleteTask={props.deleteTask}/>)
            }
            </div>
        </div>
    )
}