import { createContext } from "react";


export const AppContext = createContext({})


export const AppContextProvider = (props) => {


    const DUMMY_DATA = [
        {
          id:1,
          text:'Sample Text'
        },
        {
          id:2,
          text:'Another Sample Text'
        },
      ]

    const context = {
        DUMMY_DATA: DUMMY_DATA
    }

    return(
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    )
}