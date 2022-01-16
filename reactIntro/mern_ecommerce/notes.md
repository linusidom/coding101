### MERN Ecommerce Product Project ###

# Build out Backend / Connect to Mongo - done
- npm install express mongoose dotenv bcryptjs nodemon passport passport-local express-session cookie-parser concurrently
- Configure Database connection / start Express Server
- Setup basic controllers, routes, schemas for Product and User

# Build out Front End Auth - done
- npm install react-router-dom react-bootstrap@next bootstrap@5.1.3 react-redux @reduxjs/toolkit
- Add Bootstrap Navbar
- Basic Routing with Home, Register, Login, Products
- Redux Alert Store, User Store, Product
- UI Register Form
- Register Express API Config and Redux Calls


# Build out Backend for User Auth - done
- Express Sessions
- Cookie Parser
- Passport  Middleware setup
- Register Controller, route
- Login Controller, route

# Frontend User Redux Register, Login, Verify - done
- Redux User Store
- Register Fetch
- UI Login Form
- Login Fetch
- UserVerify Fetch
- Add to App.js on page refresh
- test full User Auth Flow


# Profile Page and PrivateRoute - done
- But wait...there's a problem...what happens when we save in nodemon?

# Connect Mongo - done
- Correct the Session state reloading problem with sessions stored in our database

# Product - done
- Backend
 - Create Product Create Retrive (List) controller
  - ProductList, ProductCreate
- FrontEnd
 - Redux Product Store
 - Product Create Form
 - Product List Page

# Cart - done
- Create Cart upon user coming to site
 - Logged or Anon (use request.session)
- Create Front End Cart in Redux
 - Add / Remove from Cart functions
- Create cart middleware
- add getCart method to App.js loading
- Create Cart Page 


# Setup Private Routes and Protected Routes - done
- Private route for frontend
- Protected Middleware route for backend

# Checkout Process - done
- Create Checkout Page
- Check for Credit card on file
- Add Credit Card

# Omise Setup - done
- Register with Omise - userRegisterView
- Update User Register with Omise Customer Creation
- Store Private and Public keys in backend and frontend

# Omise Credit Card Handling - done
- FrontEnd
 - Create Omise Card Form
 - Use Omise CDN to get token for CC
 - Send token to backend (DO NOT SEND CARD DATA TO BACK END)
- Backend
 - Update Omise Customer with New Card Information
 - Store basic card information in user object

# Place the order - done
- Charge the Credit Card
- Create the order
 - add the cart and the charge ID to the order
- Add products to the user object
- Clear the cart and create a new one


# Product Detail - done
<!-- TODO -->
 - Product Detail (w/out paid content) [Will come back to this in a bit] //TODO


# Orders Page - done
- Get a list of the orders placed and the total amount earned