const db = require('./db')
const request = require('supertest');
const app = require('../backend/server')
// At the start of the testing phase (testing Setup)
beforeAll(async () => await db.connect())

// After each of the individual tests (test Setup)
afterEach(async () => await db.clearDatabase())

// After all tests are completed - overall cleanup (tearDown)
afterAll(async () => await db.closeDatabase())


const createPost = async () => {
    const post = {title: 'a new post - really?', description: 'a new description'}

    const response = await request(app)
        .post('/posts')
        .send(post)
        .set('Accept', 'application/json')
    
    return response.body
}

describe('Controller Tests', () => {


    it('Post Create View Test', async () => {
        
        const post = {title: 'a new post - really?', description: 'a new description'}

        const response = await request(app)
            .post('/posts')
            .send(post)
            .set('Accept', 'application/json')
        
        
        
        expect(response.status).toEqual(201);
        expect(response.body.title).toEqual(post.title);

    })

    // Post Detail View
    it('Post Detail View Test', async () => {
        
        
        // In order to have a detail view we have to have a 
        // Post in our database
        const post = await createPost()

        // console.log(post)
        const response = await request(app)
            .get(`/posts/${post._id}`)
            .set('Accept', 'application/json')
        


        expect(response.status).toEqual(200);
        expect(response.body.title).toEqual(post.title);

    })
    // Post Update View
    it('Post Update View Test', async () => {
        
        
        // In order to have a detail view we have to have a 
        // Post in our database
        const post = await createPost()


        const updatedPost = {title: 'updated title', description:'updated description'}

        const response = await request(app)
            .put(`/posts/${post._id}`)
            .send(updatedPost)
            .set('Accept', 'application/json')
        


        expect(response.status).toEqual(200);
        expect(response.body.title).toEqual(updatedPost.title);

    })

    // Withouth afterEach cleraing of the database
    // This test would fail!  afterEach clearing of the database is very important
    it('Post List View Test', async () => {
        
        const response = await request(app)
            .get('/posts')
            .set('Accept', 'application/json')
        
        // console.log(response.body)
        
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([]);

    })

    // Post Delete View
    it('Post Delete View Test', async () => {
        
        
        // In order to have a detail view we have to have a 
        // Post in our database
        const post = await createPost()

        const response = await request(app)
            .delete(`/posts/${post._id}`)
            .set('Accept', 'application/json')

        expect(response.status).toEqual(200);
        expect(response.body).toEqual(post);

    })
})