import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './Dashboard'
import Header from './Header'

import { Provider } from 'react-redux'
import store from '../store/LeadStore'

function App(){
    return(
        <Provider store={store}>
            <div>
                <Header/>
                <Dashboard/>
            </div>
        </Provider>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))