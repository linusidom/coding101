import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AlertComponent from '../components/AlertComponent'
import useInput from '../customhooks/inputhook'
import { userLogin } from '../store/AuthStore'


const LoginForm = () => {

    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch()

    // I want to use custom hooks instead of lots of useState
    // Username
    const {
        value: username,
        valueValid: usernameValid,
        onValueChangeHandler: onUsernameChangeHandler,
        onValueBlurHandler: onUsernameBlurHandler,
        resetValue: resetusername
    } = useInput(item => item === '')


    // Password
    const {
        value: password,
        valueValid: passwordValid,
        onValueChangeHandler: onPasswordChangeHandler,
        onValueBlurHandler: onPasswordBlurHandler,
        resetValue: resetMessage
    } = useInput(item => item === '')



    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(!usernameValid && !passwordValid){
            const credentials = {
                username,
                password
            }
            dispatch(userLogin(credentials))
        }
    }

    if(auth.isAuthenticated){
        return <Redirect to='/'/>
    }

    return(
        <div>
            <AlertComponent/>
          <form onSubmit={onSubmitHandler}>
            
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Choose Username</label>
                <input type="text" className="form-control" id="username" placeholder="Choose Username" value={username} onChange={onUsernameChangeHandler} onBlur={onUsernameBlurHandler}/>
                {usernameValid && <p>Username cannot be blank</p>}
            </div>

     

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Choose Password</label>
                <input type="password" className="form-control" id="password" placeholder="Choose Password"  value={password} onChange={onPasswordChangeHandler} onBlur={onPasswordBlurHandler}/>
                {passwordValid && <p>Passoword cannot be blank</p>}
            </div>
            
            
            
            <button className='btn btn-primary' type='submit'>Login</button>
          </form>
        </div>
    )
}

export default LoginForm