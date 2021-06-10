
// No need for {} when importing 'default'
export default function Header(props) {
    
    // console.log(props)
    
    return(
    <div className="row">
        <div className="col">
          <h1>{props.title}</h1>
        </div>
        <div className="col text-end">
          <button className={props.showForm ? 'btn btn-danger' :'btn btn-info'} onClick={props.toggleForm}>{props.showForm ? 'Close' : 'Add'}</button>
        </div>
    </div> 
    )

}

// Use {} on import
// export const Header = (props) => {
//     return(
//     <div className="row">
//     <div className="col">
//       <h1>Const Task Tracker</h1>
//     </div>
//     <div className="col text-end">
//       <button className={props.showForm ? 'btn btn-danger' :'btn btn-info'} onClick={props.toggleForm}>{props.showForm ? 'Close' : 'Add'}</button>
//     </div>
// </div> 
// )
// }

// export default Header