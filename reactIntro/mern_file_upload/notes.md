## Build out Express Backend - done
- Initialize for NPM
 - mongoose, express, nodemon, concurrently, dotenv
- Connect to Database
- Start Server
- Build out Basic Controller
- Build out Basic Routes

## Schemas - done
- Create Basic Post Schema


## Setup Frontend UI - done
- Start Create React App
 - bootstrap, react-bootstrap, react-router-dom, react-redux, @reduxjs/toolkit
- Layout and Header
 - React Navbar
- Add routing to index.js
- Setup Basic Routing
 - Home Page
 
## Prep Redux - done
- Add Redux to index.js
- Create Alert Component
- Create Alert Store
- Connect Alert Store to Main Store



## Posts List - done
- Create Posts Page
 - Add to routing
- Setup Backend for Posts
 - Routes
 - Controller
- Setup Redux Store for Posts
 - Add Redux Reducers and calls to posts



## Post Single Image - done
- Create Post Single Image Form
- Show add data to FormData
 - Add to routing
- Setup Backend for Login
 - Routes
 - Controller - Add Multer to Controller
- Add Redux Reducers and calls to post (modify headers)

## Setup Multer to handle File uploads and images - done
- Create middleware for multer
- Create diskStorage
- create uploads for Single image

## Multer Error Handling
- If you want to not show any errors then 
 - uploads.single('image) between the route and the controller in the Routes File
 router.post('/createOne', upload.single('image) ,postCreateOneView)

- if you want to show errors, we have to wrap the controller with the upload and append the upload type in the middleware

- const upload = multer({ 
    storage: storage,
    limits: {fileSize: 1000}
}).single('image')

- upload( req, res, async (err) => {
        if(err) {
            res.status(400).json({message:err.message})
        } else {
            try {
                // console.log(req.body, req.file)
                const post = await Post.create({title: req.body.title, content: req.body.content, image: `/uploads/${req.file.filename}`})
                res.status(200).json(post)
        
            } catch (error) {
                res.status(400).json({message:error.message})
            }
        }
    })


## Create a directory for the files when we create a document
      // const pathName = `./frontend/public/uploads/${req.body.title}`
      
      // fs.mkdir(pathName, {recursive: true}, (err) => {
      //   if(err) {
      //     return err
      //   } else {
      //     cb(null, pathName)
      //   }
      // })


## Post Multiple Image
- Create Post Multiple Image Form (array upload)
 - Add to routing
- Setup Backend for Multiple Image Uploads
 - Add array to multer
 - Routes
 - Controller - Add Multer to Controller
 - Modify Schema example
- Add Redux Reducers and calls


## Post PDF Files
- Create PostPDF Form (single upload)
 - Add to routing
- Setup Backend for PDF Upload
 - Add fileFilter multer
 - Routes
 - Controller - Add Multer to Controller
- Add Redux Reducers and calls
