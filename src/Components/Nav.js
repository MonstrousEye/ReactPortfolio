import { Navbar } from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import { Nav} from 'react-bootstrap';
import { Image} from 'react-bootstrap';






function NavBar(){
    return(
        <>
  <Navbar bg="dark" variant="dark">
  <Image className="logo" src="logo.jpg" width="60" height="60" roundedCircle />
    <Container>
    
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/" >Home</Nav.Link>
      <Nav.Link href="#about" >About</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>



</>
    )
}

export default NavBar;