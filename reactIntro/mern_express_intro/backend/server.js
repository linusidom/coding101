// import express from 'express'
const express = require('express')

const app = express()
const port = 3000

const appRoutes = require('./routes/appRoutes')
const postRoutes = require('./routes/postsRoutes')
// app.get('/', (request, response) => {
//     request is a long form for req
//     response is a long form of res

//     usually it is written shorthand (req, res)
// })

// app.get('/', (req, res) => {
//     // res.send is usually used for webpage responses
//     //   res.send('Hello World!')
//     res.json({message:'This is an example to show how NodeMon auto-reloads'})
// })

// // POST - Create
// app.post('/', (req, res) => {
//     console.log(req.method)
//     res.json({message:'This is a Post Request'})
// })

// // PUT - Updates
// app.put('/', (req, res) => {
//     console.log(req.method)
//     res.json({message:'This is a put request'})
// })


// // DELETE - Remove/delete
// app.delete('/', (req,res) => {
//     console.log(req.method)
//     res.json({message:'This is a delete request'})
// })


// const basicResponse = (req, res) => {
//     res.json({message:'This is a chained response'})
// }


// I can chain these requests together
// app.route('/').get(basicResponse).post(basicResponse)

// Getting parameters or specific information from the URL
// app.get('/:randomString', (req, res) => {
//     console.log(req.params)
//     res.json({message:`You wanted to get info on ID ${req.params.randomString}`})

// })


// If you're familiar Django - this is the global urls.py within the project folder
// path('/', include(approutes.urls))
app.use('/', appRoutes)
app.use('/posts', postRoutes)





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})