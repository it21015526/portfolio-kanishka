import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillSlackCircle } from 'react-icons/ai';


function Navbarx() {
  return (
    <>
    <Navbar bg="clear" variant="clear">
        <Container style={{textAlign:'center',display : 'flex', justifyContent:'center'}}>
            <AiFillSlackCircle size={30} color = 'purple'/>
          {/* <Navbar.Brand href="/">Kanishka</Navbar.Brand> */}
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            {/* <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="/project">Projects</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbarx