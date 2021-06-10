
export function Task(props){

    console.log(props)
    return(
        <div className="row  my-3" key={props.task.id}>
            <div className="col">
                <h3> { props.task.text} </h3>
            </div>
            <div className="col text-end">
                <button className='btn btn-danger' onClick={ () => props.deleteTask(props.task.id)}>Delete</button>
            </div>	
        </div>
    )
}