import {screen, render} from '@testing-library/react'
import { AlertComponent } from './AlertComponent'
import { configureStore } from '@reduxjs/toolkit'
import alertReducer, { alertSliceActions } from '../store/AlertStore'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


export const store = configureStore({
    reducer: {
        alert: alertReducer,
    }
})

const MockComponet = (props={}) => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <AlertComponent/>
            </Provider>
        </BrowserRouter>
    )
}

const mockDispatch = jest.fn()
// console.log(mockDispatch)

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
   useDispatch: () => mockDispatch
 }));

 afterEach(() => {
     jest.clearAllMocks()
 })

 jest.useFakeTimers();

describe('Alert Component', () => {

    beforeEach(() => {
        render(MockComponet())
    })
    it('should render alert component with alert from store', async () => {
        const alert = {message:'alert messages', variant:'danger'}
        await store.dispatch(alertSliceActions.showAlert(alert))

        expect(screen.getByRole('alertComponent').classList.contains('alert-danger')).toEqual(true)
        expect(screen.getByText(alert.message)).toBeInTheDocument()

    })

    it('should render dynamically based on showAlert status', async () => {
        const alert = {message:'alert messages', variant:'danger'}
        await store.dispatch(alertSliceActions.closeAlert())

        expect(screen.queryByRole('alertComponent')).not.toBeInTheDocument()
    
    })

    it('should dynamically disappear after 5 seconds', async () => {

        const alert = {message:'alert messages', variant:'danger'}
        await store.dispatch(alertSliceActions.showAlert(alert))
        expect(screen.queryByRole('alertComponent')).toBeInTheDocument()
        
        jest.runAllTimers();

        await store.dispatch(alertSliceActions.closeAlert())
        expect(screen.queryByRole('alertComponent')).not.toBeInTheDocument()
        

    })

    
})