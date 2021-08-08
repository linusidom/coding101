import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './Dashboard'
import Header from './Header'

import { Provider, useDispatch } from 'react-redux'
import store from '../store/LeadStore'

import {HashRouter, Route, Switch, R, HashRouteredirect} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import PrivateRoute from './PrivateRoute'
import { authSliceActions, loadUser } from '../store/AuthReducer'

function App(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
    }, [])


    return(
        
        <div>
            <Header/>
            <div className='container'>
                <Switch>
                    <PrivateRoute path='/' exact><Dashboard/></PrivateRoute>
                    <Route path='/login' ><Login/></Route>
                    <Route path='/register' ><Register/></Route>
                    <Route path='/logout' ><Logout/></Route>

                </Switch>
            </div>
            
        </div>
    )
}

ReactDOM.render(<HashRouter><Provider store={store}><App/></Provider></HashRouter>, document.getElementById('app'))