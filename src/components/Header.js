import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/images/logo.png"

function Header(){

    return(

        <>
        
        <Navbar collapseOnSelect expand="lg" className="custom-nav">
            <Container className="justify-content-between">

            <Navbar.Brand href="#home" className="logo">
                <img src={Logo}/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end">
               
         
                <Nav>
                <Nav.Link href="#">Collection</Nav.Link>
                <Nav.Link href="#">FAQ</Nav.Link>
                <Nav.Link href="#">Breading</Nav.Link>
                <a href="#" className="custom-btn primary-btn">Connect</a>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        </>

    )



}

export default Header;