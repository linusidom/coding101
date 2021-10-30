import {Navbar, Nav, Container} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { userSliceActions } from '../store/UserStore'


export const Header = () => {


    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(userSliceActions.userLogout())
    }

    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">MERN Auth App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}