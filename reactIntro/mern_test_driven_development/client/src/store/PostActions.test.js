import { configureStore } from '@reduxjs/toolkit'
import postReducer, {postCreateView, postDeleteView, postDetailView, postListView, postResetStore, postSliceActions, postUpdateView} from './PostStore'

// We have to create a fake store to test against

export const store = configureStore({
    reducer: {
        post: postReducer,
    }
})

afterEach( async () => {
    await store.dispatch(postSliceActions.postReset())

    jest.restoreAllMocks();
  });

describe('Integration Tests - Post Action Creators', () => {
    it('should render post list', async () => {

        // This is the object we get from our back end
        const post = [{_id: 0, title: 'a new title', description:'a new description'}]

        // We have a problem here....I call the function/action creator...
        // but I don't know what I get back from fetch

        // This is the response we get from our backend
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(post)
        })

        // We need to update the store and invoke fetch
        await store.dispatch(postListView())

        const newState = await store.getState()

        // Check if we get what we expect
        expect(newState.post.posts).toEqual(post)

    })
    it('should render post create', async () => {

        // This is the object we get from our back end
        const post = {_id: 0, title: 'a new title', description:'a new description'}

        // We have a problem here....I call the function/action creator...
        // but I don't know what I get back from fetch

        // This is the response we get from our backend
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(post)
        })

        // We need to update the store and invoke fetch
        await store.dispatch(postCreateView(post))


        const newState = await store.getState()

        // console.log(newState)
        // Check if we get what we expect
        expect(newState.post.posts).toEqual([post])

    })
    it('should render post detail', async () => {

        // This is the object we get from our back end
        const post = {_id: 0, title: 'a new title', description:'a new description'}

        // We have a problem here....I call the function/action creator...
        // but I don't know what I get back from fetch

        // This is the response we get from our backend
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(post)
        })

        // We need to update the store and invoke fetch
        await store.dispatch(postDetailView(post._id))

        const newState = await store.getState()

        // console.log(newState)
        // Check if we get what we expect
        expect(newState.post.post).toEqual(post)

    })

    it('should render post detail', async () => {

        // This is the object we get from our back end
        const post0 = {_id: 0, title: 'a new title - 0', description:'a new description - 0'}
        const post1 = {_id: 1, title: 'a new title - 1', description:'a new description - 1'}

        await store.dispatch(postSliceActions.postCreate(post1))
        await store.dispatch(postSliceActions.postCreate(post0))

        const updatedPost = {_id:0, title: 'updated', description:'updated'}
        // We have a problem here....I call the function/action creator...
        // but I don't know what I get back from fetch

        // This is the response we get from our backend
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(updatedPost)
        })

        // We need to update the store and invoke fetch
        await store.dispatch(postUpdateView(post0._id, updatedPost))

        const newState = await store.getState()

        // console.log(newState)
        // Check if we get what we expect
        expect(newState.post).toEqual({posts:[updatedPost, post1], post: updatedPost})

    })
    it('should render post delete', async () => {

        // This is the object we get from our back end
        const post = {_id: 0, title: 'a new title - 0', description:'a new description - 0'}
    
        await store.dispatch(postSliceActions.postCreate(post))

        // We have a problem here....I call the function/action creator...
        // but I don't know what I get back from fetch

        // This is the response we get from our backend
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(post._id)
        })

        // We need to update the store and invoke fetch
        await store.dispatch(postDeleteView(post._id))

        const newState = await store.getState()

        // console.log(newState)
        // Check if we get what we expect
        expect(newState.post).toEqual({posts:[], post: {}})

    })
})