import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/images/logo.png"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";

function Header(){

const [navbar, setNavbar] = useState(false);


useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
  }, []);

    return(

        <>
        
        <Navbar collapseOnSelect expand="lg" className={ navbar ? "custom-nav active" : "custom-nav"}>
            <Container className="justify-content-between">

            <Link to={"/"} className="logo">
                <img src={Logo}/>
            </Link>

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