import Header from "./Header";

export default function Layout(props){
    return(
        <div>
            <Header/>
            <div>{props.children}</div>
        </div>
    )
}