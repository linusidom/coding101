import { configureStore } from '@reduxjs/toolkit'
import {screen, render} from '@testing-library/react'
import { Posts } from './Posts'
import postReducer, { postSliceActions } from '../store/PostStore'
import { Provider } from 'react-redux'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'


export const store = configureStore({
    reducer: {
        post: postReducer,
    }
})

const MockComponet = (props={}) => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <Posts/>
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


describe('Post render', () => {

    beforeEach( async () => {
        
        render(MockComponet())
        
            
        
        
    })

    it('should render posts component', () => {
        expect(screen.getByRole('postsComponent')).toBeInTheDocument()
    })
    it('should render a post', async () => {

        const post = {_id:0, title: 'A new Title', description: 'a New description'}
        
        await store.dispatch(postSliceActions.postList([post]))
        
        expect(screen.getAllByRole('postTitleComponent').length).toBe(1)
        expect(mockDispatch).toHaveBeenCalledTimes(1)
        
    })


})