import postReducer, {postSliceActions} from './PostStore'

describe('Post Reducer', () => {
    it('should test initial State', () => {

        expect(postReducer(undefined, {})).toEqual({posts:[], post:{}})
    })

    it('should test post List Reducer', () => {

        const initialState = {posts:[], post:{}}
        const post = [{_id: 0, title: 'a new title', description: 'a new description'}]
        expect(postReducer(initialState, postSliceActions.postList(post))).toEqual({posts:post, post:{}})
    })

    it('should test post create Reducer', () => {

        const initialState = {posts:[], post:{}}
        const post = {_id: 0, title: 'a new title', description: 'a new description'}
        expect(postReducer(initialState, postSliceActions.postCreate(post))).toEqual({posts:[post], post:{}})
    })
    it('should test post detail Reducer', () => {

        const initialState = {posts:[], post:{}}
        const post = {_id: 0, title: 'a new title', description: 'a new description'}
        expect(postReducer(initialState, postSliceActions.postDetail(post))).toEqual({posts:[], post:post})
    })
    it('should test post update Reducer', () => {

        const post0 = {_id: 0, title: 'a new title - 0', description: 'a new description - 0'}
        const post1 = {_id: 1, title: 'a new title - 1', description: 'a new description - 1'}
        const initialState = {posts:[post0,post1], post:{}}

        const updatedPost = {_id: 0, title: 'a new title - Updated', description: 'a new description - Updated'}
        
        expect(postReducer(initialState, postSliceActions.postUpdate(updatedPost))).toEqual({posts:[updatedPost, post1], post:updatedPost})
    })

    it('should test post delete Reducer', () => {

        const post = {_id: 0, title: 'a new title - 0', description: 'a new description - 0'}
        
        const initialState = {posts:[post], post:{}}
        
        expect(postReducer(initialState, postSliceActions.postDelete(post._id))).toEqual({posts:[], post:{}})
    })
})