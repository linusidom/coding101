import {Container, Nav, Navbar} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { userSliceActions } from '../store/UserStore'

export const Header = () => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user)

    const logoutHandler = async () => {
        dispatch(userSliceActions.logoutUser())
    }

    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    {user.authorized ? 
                        <>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                        </>
                    : 
                        <>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}