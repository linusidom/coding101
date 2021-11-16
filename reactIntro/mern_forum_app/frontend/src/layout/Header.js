import { useState } from 'react';
import {Container, Navbar, Nav,Modal, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { userSliceActions } from '../store/UserStore';
export const Header = () => {


    const [show, setShow] = useState(false);

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const logoutHandler = () => {
        setShow(false)
        dispatch(userSliceActions.logoutUser())
    }



    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
                    {!user.authorized ? <><Nav.Link as={Link} to="/register">Register</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </> :

                    <>
                    <Nav.Link as={Link} to="/create">Create</Nav.Link>
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    <Nav.Link onClick={handleShow}>Logout</Nav.Link>
                    </>
                    }

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Are you sure you would like to logout?</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-danger" onClick={logoutHandler}>
                            Logout
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}