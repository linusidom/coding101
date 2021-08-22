import React from 'react'
import { Route, Switch } from 'react-router'
import Layout from './layout/Layout'
import PrivateRoute from './layout/PrivateRoute'
import Home from './pages/Home'
import LoginForm from './pages/LoginForm'
import LogoutPage from './pages/LogoutPage'
import RegisterForm from './pages/RegisterForm'

const App = () => {
    return(
        <Layout>
            <Switch>
                <PrivateRoute path='/' exact><Home/></PrivateRoute>
                <Route path='/register' exact><RegisterForm/></Route>
                <Route path='/login' exact><LoginForm/></Route>
                <Route path='/logout' exact><LogoutPage/></Route>
            </Switch>
        </Layout>
    )
}

export default App