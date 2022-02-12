import {screen, render, fireEvent} from '@testing-library/react'
import { PostDetail } from './PostDetail'
import { configureStore } from '@reduxjs/toolkit'
import postReducer, { postSliceActions } from '../store/PostStore'
import alertReducer, { alertSliceActions } from '../store/AlertStore'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { act } from 'react-dom/test-utils'

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
                <PostDetail/>
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
    useNavigate: () => mockNavigate.mockReturnValue(true),
    useParams: () => ({
        postID: '12345'
    })
}));

afterEach(() => {
    jest.clearAllMocks()
})

describe('Post Detail', () => {

    beforeEach(async () => {
        await act(async() => {
            const post = {_id:0, title: 'a new post', description:'a new description'}
            await store.dispatch(postSliceActions.postDetail(post))
            render(MockComponet())
        })
        
    })

    it('should render a post from the store', async () => {
        

        expect(screen.getByRole('postTitleComponent')).toBeInTheDocument()
    })

    it('should render a form', () => {

        fireEvent.click(screen.getByRole('updateButton'))
        // console.log(button)
        expect(screen.getByRole('updateItemButton')).toBeInTheDocument()
    })

    it('should display an error if the form is blank', async () => {

        fireEvent.click(screen.getByRole('updateButton'))

        fireEvent.change(screen.getByRole('titleInput'), {target: {value:''}})
        fireEvent.change(screen.getByRole('descriptionInput'), {target: {value:''}})
        
        fireEvent.click(screen.getByRole('updateItemButton'))
        await store.dispatch(alertSliceActions.showAlert({message:'fields must be filled in', variant:'danger'}))

        expect(screen.getByRole('alertComponent')).toBeInTheDocument()

    })

    it('should update the post', async () => {


        const updatedPost = {_id:0, title:'updated post', description:'updated description'}

        fireEvent.click(screen.getByRole('updateButton'))

        fireEvent.change(screen.getByRole('titleInput'), {target: {value:updatedPost.title}})
        fireEvent.change(screen.getByRole('descriptionInput'), {target: {value: updatedPost.description}})
        
        fireEvent.click(screen.getByRole('updateItemButton'))
        await store.dispatch(postSliceActions.postUpdate(updatedPost))

        expect(screen.getByText(updatedPost.title)).toBeInTheDocument()
    })
    it('should delete the post', async () => {
        fireEvent.click(screen.getByRole('deleteButton'))
        // console.log(button)
        expect(mockDispatch).toHaveBeenCalledTimes(2)
        // expect(mockNavigate).toHaveBeenCalledTimes(1)
    })
})