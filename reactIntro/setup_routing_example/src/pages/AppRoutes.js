import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Users from "./Users"
import NotFound from "./NotFound"

import UserDetail from "./UserDetail"
export default function AppRoutes(){
    return(

        // {/* A <Switch> looks through its children <Route>s and
        //     renders the first one that matches the current URL. */}

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/about">
                <About />
            </Route>
            
            <Route exact path="/users">
                <Users />
            </Route>
            
            <Route exact path="/userDetail/:userID">
                <UserDetail/>
            </Route>
            {/* Wildcard Route - If the route doens't exist, display this route */}
            <Route path='*'><NotFound/></Route>
        </Switch>
    )
}