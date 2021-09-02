import { Route, Switch } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Forgot } from './components/Forgot'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Update } from './components/Update'
import './index.css'
import { Layout } from "./layout/Layout"

import auth from './firebaseConfig'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authSliceActions } from './store/AuthStore'
import { PrivateRoute } from './components/PrivateRoute'
import {ConfigFirebase} from './components/ConfigFirebase'
const App = () => {


    // console.log(auth)

    const dispatch = useDispatch()

    const user = useSelector(state => state.auth)
    console.log(user)

    const [loading, setLoading] = useState(true)


    // similar to a LoginRequiredMixin in Django
    useEffect(() => {
        if(typeof auth !== 'string'){
            auth.onAuthStateChanged(user => {
                if(user){
                    dispatch(authSliceActions.verifyUser(user.email))
                }
                else{
                    dispatch(authSliceActions.loggedOut())
                }
                setLoading(false)
            })
        }
            
    }, [])

    if(typeof auth === 'string'){
        return <Route path='*'><ConfigFirebase/></Route>
    }

    return (
        <Layout>
            {!loading && 
            <Switch>
                <Route path='/' exact><Home/></Route>
                <Route path='/register' exact><Register/></Route>
                <Route path='/login' exact><Login/></Route>
                <Route path='/forgot' exact><Forgot/></Route>

                {/* Protected Pages */}
                <PrivateRoute path='/dashboard' exact><Dashboard/></PrivateRoute>
                <PrivateRoute path='/update' exact><Update/></PrivateRoute>

            </Switch>}

        </Layout>
    )
}

export default App