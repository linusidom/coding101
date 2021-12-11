## Build out Backend - done
- npm init -y
- npm install express mongoose dotenv bcryptjs concurrently
- setup backend for
 - Database Connection
 - Start Server
 - Basic User routes, controller and Schema
 - Test with PostMan

## Build out FrontEnd - done
- npx create-react-app
- Build out Header and Layout
- Setup Routing
- Create basic Register, Login, Logout and Profile Pages

## Setup Redux - done
- Build out Redux Stores for Main, Alert, and User
- Build out AlertComponent

## Connect Frontend to backend - done
- Proxy frontend to backend

## Register Form - done
- Build Register Form
- Build Redux Fetch call
- Build Express router and controller
- Test

## Login Form
- Build Register Form
- Build Redux Reducer and Fetch call
- Build Expres router and controller


## Refactor Login Form With PassPort JS
- Will use Passport-local for Username/Password Auth
- npm install cookie-parser passport passport-local express-session
- configure middleware for passport js
- configure server.js to include express-session, cookie-parser and passport

## Connect Passport to Login Route
- Add passport middleware to the Login route


## Show cookies in Browser
- Walkthrough cookie creation in browser
- Register
- Login

## Create a getUser/verifyUser Route
- Create a getUser Route to test whether the user is logged in or not

## Create a logout route
- Logout User from the system
