import { useContext } from "react"
import { AppContext } from "./store/AppStore"


function AnotherComponent(){

    // console.log(props.passed_props)

    const appCtx = useContext(AppContext)

    return(
        <div>
            <h1>This is another Component</h1>
            <h3>I want to show the DUMMY DATA HERE</h3>
            {appCtx.DUMMY_DATA.map((data) => <p key={data.id}>From useContext {data.text}</p>)}
        </div>
    )
}

export default AnotherComponent