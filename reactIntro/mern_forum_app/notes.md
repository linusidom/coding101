## Build out Express Backend
- Initialize for NPM
 - mongoose, express, nodemon, concurrently, dotenv, bcryptjs, jsonwebtoken
- Connect to Database
- Start Server
- Build out Basic Controller
- Build out Basic Routes


## Setup Frontend UI
- Start Create React App
 - bootstrap, react-router-dom, react-redux, @reduxjs/toolkit
- Layout and Header
 - React Navbar
- Add routing to index.js
- Setup Basic Routing
 - Home Page
 

## Prep Redux
- Add Redux to index.js
- Create Alert Component
- Create Alert Store
- Connect Alert Store to Main Store


## Schemas
- Create User Schema

## Register Form 
- Create Register Form
 - Add to routing
- Setup Backend for Register
 - Routes
 - Controller
- Setup Redux Store for User
 - Add Redux Reducers and calls to register


## Login Form
- Create Login Form
 - Add to routing
- Setup Backend for Login
 - Routes
 - Controller
 - Compared Passwords and sent back the user upon success
- Add Redux Reducers and calls to login

## Create the Profile Page
- Create a Profile Page
- Display the user information

## Introduce JsonWebTokens
- How to generate Web Tokens
- How to use Tokens
- Add tokens to LocalStorage after Login

## Persist User Session
- Configure private route
- Configure method to verify user
 - Create Route in the backend
 - Create A controller in the backend to check
- Add verify to Redux
- Add method to check on the main and then load the app

## Protection Middleware
- Create a middlware to verify user that we can use again

## Create the Post Backend
- postListView
 - Express Route/Controller
 - React Page
 - Redux Reducer and call

- postCreateView (protect this route)
 - Express Route/Controller
 - React Page
 - Redux Reducer and call

- postDetailView
 - Express Route/Controller
 - React Page
 - Redux Reducer and call

- postUpdateView (protect this route)
 - Express Route/Controller
 - Check whether the owner owns the post
 - React Page
  - Handle Update Post request
 - Redux Reducer and call

- postDeleteView (protect this route)
 - Express Route/Controller
 - Check whether the owner owns the post
 - React Page
 - Redux Reducer and call

## Add comments to post
- commentCreateView (protect this route)
 - Express Route/Controller
 - React Page - Post Detail Page
 - Redux Reducer and call

- commentDeleteView (protect this route)
 - Express Route/Controller
 - Check whether the owner owns the post
 - React Page - Post Detail Page
 - Redux Reducer and call
 