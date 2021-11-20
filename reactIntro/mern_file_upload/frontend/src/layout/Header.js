import { Link } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap"
export const Header = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
                    <Nav.Link as={Link} to="/postOne">Post One</Nav.Link>
                    <Nav.Link as={Link} to="/postMultiple">Post Multiple</Nav.Link>
                    <Nav.Link as={Link} to="/postPDF">Post PDF</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}