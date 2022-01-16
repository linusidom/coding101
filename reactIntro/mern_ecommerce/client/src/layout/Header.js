import { Badge, Container, Nav, Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {Link, useNavigate} from 'react-router-dom'
import { userLogoutView } from "../store/UserStore"
import {MdOutlineShoppingCart} from 'react-icons/md'


export const Header = () => {


    const user = useSelector(state => state.user)

    const cart = useSelector(state => state.cart.cart)

    const dispatch = useDispatch()

    const nav = useNavigate()

    const userLogoutHandler = async () => {
        const result = await dispatch(userLogoutView())
        if(result){
            nav('/')
        }
    }


    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">{user.user.username || 'React-Bootstrap'}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                <Nav.Link as={Link} to="/cart"><Badge><MdOutlineShoppingCart/> {cart.quantity} </Badge></Nav.Link>

                
                {!user.authorized ? 
                    <>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </>
                : 
                    <>
                        <Nav.Link as={Link} to="/create">Create</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                        <Nav.Link onClick={userLogoutHandler}>Logout</Nav.Link>    
                    </>
                }
                

                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}