export default function CustomComponent(props){
    console.log(props)
    return(
        <div style={{border:'5px solid blue', height: '300px', width: '300px', margin: '0px auto'}}>
            {props.text}
            <p>{props.children}</p>
        </div>
    )
}

export function CustomCard(props){
    console.log(props)
    return(
        <div style={{border:'5px solid red', height: '300px', width: '300px', margin: '0px auto'}}>
            {props.text}
            <p>{props.children}</p>
        </div>
    )
}