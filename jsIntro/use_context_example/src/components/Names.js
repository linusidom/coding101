import { useContext } from "react"
import { NamesContext } from "../store/NamesContext"
import Name from "./Name"

export default function Names(){
    // console.log(props)

    const namesCtx = useContext(NamesContext)
  
    return(
        <>
        {namesCtx.names.map((name) => <Name key={name.id} name={name}/>)}
        </>
    )
}