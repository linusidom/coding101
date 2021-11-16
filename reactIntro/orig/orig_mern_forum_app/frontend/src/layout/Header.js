import { useState } from 'react'
import {Container, Nav, Navbar, Modal, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { userSliceActions } from '../store/UserStore'

export const Header = () => {
    
    const user = useSelector(state => state.user)

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const dispatch = useDispatch()

    const logoutHandler = async () => {
        setShow(false)
        await dispatch(userSliceActions.logoutUser())
    }
    
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">{user.authorized ? user.user.username : 'Not Logged in'}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/posts">Posts</Nav.Link>

                {user.authorized ? 
                <>
                    <Nav.Link as={Link} to="/postCreate">Create</Nav.Link>
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    <Nav.Link onClick={handleShow}>Logout</Nav.Link>
                    
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Are you sure you want to Logout?</Modal.Title>
                        </Modal.Header>
                        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={logoutHandler}>
                            Logout
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                : 
                
                <>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                </>
                }

                
                

                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}