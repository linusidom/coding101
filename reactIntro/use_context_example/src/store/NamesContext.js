


// Create Context (use this for the imports to call the correct funtions)
// Holds all the variables needed

import { createContext, useState } from "react";


export const NamesContext = createContext({})

// Listener
export function NamesContextProvider(props){

    // default list for Names, names, setName
    const [names, setNames] = useState([])

    function addName(name){
    // console.log(name)
        setNames(prevNames => prevNames.concat(name))
    }

    function deleteName(nameID){
    // console.log(nameID)
        setNames(prevName => prevName.filter((name) => name.id !== nameID))
    }

    

    const context = {
        names: names,
        addName: addName,
        deleteName: deleteName
    }

    return(
        <NamesContext.Provider value={context}>
            {props.children}
        </NamesContext.Provider>
    )
}