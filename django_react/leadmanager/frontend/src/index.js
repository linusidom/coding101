import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/MainStore'

// We don't want to use BrowserRouter
// We want to use HashRouter - i will show why later on

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
, document.getElementById('root'))