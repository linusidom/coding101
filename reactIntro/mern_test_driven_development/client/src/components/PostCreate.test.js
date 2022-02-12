import {screen, render, fireEvent} from '@testing-library/react'
import { PostCreate } from './PostCreate'
import { configureStore } from '@reduxjs/toolkit'
import postReducer, { postSliceActions } from '../store/PostStore'
import alertReducer, { alertSliceActions } from '../store/AlertStore'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        post: postReducer
    }
})

const MockComponet = (props={}) => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <PostCreate/>
            </Provider>
        </BrowserRouter>
    )
}

const mockDispatch = jest.fn()
// console.log(mockDispatch)

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
   useDispatch: () => mockDispatch.mockReturnValue(true)
 }));


 const mockNavigate = jest.fn()
//  // console.log(mockNavigate)
 
 jest.mock('react-router-dom', () => ({
     ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate.mockReturnValue(true)
  }));

 afterEach(() => {
     jest.clearAllMocks()
 })


describe('Post Create', () => {

    beforeEach(() => {
        render(MockComponet())
    })

    it('should render the form', () => {
        expect(screen.getByRole('titleInput')).toBeInTheDocument()
    })
    it('should create a post and navigate to posts', async() => {
        
        const post = {_id: 0, title: 'A new post', description: 'A new description'}
        const titleInput = screen.getByRole('titleInput')
        const descriptionInput = screen.getByRole('descriptionInput')
        const buttonElement = screen.getByRole('submitButton')

        fireEvent.change(titleInput, {target: {value: post.title}})
        fireEvent.change(descriptionInput, {target: {value: post.description}})
        fireEvent.click(buttonElement)

        await store.dispatch(postSliceActions.postCreate(post))

        expect(mockDispatch).toHaveBeenCalledTimes(1)
        expect(mockNavigate).toHaveBeenCalledTimes(1)

    })
    it('should render an error', async () => {
       
        const buttonElement = screen.getByRole('submitButton')

        fireEvent.click(buttonElement)

        await store.dispatch(alertSliceActions.showAlert({message:'fields must be filled in', variant:'danger'}))

        expect(mockDispatch).toHaveBeenCalledTimes(1)
        expect(screen.getByText(/fields/i))
        screen.debug()
    })
})