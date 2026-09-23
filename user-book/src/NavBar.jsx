import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap"
import { useState, useEffect } from 'react';
import Login from './Login';

function NavBar() {
  let [showLoginModal, setShowLoginModal]  = useState(false)
  let [isLoggedIn, setIsLoggedIn] = useState(false)
  let [userName, setUserName] = useState('')
  useEffect(()=> {
    let flag = localStorage.getItem('isLoogedIn')
    if(flag) {
      setIsLoggedIn(true) 
      setUserName(localStorage.getItem('name'))
    }
  }, [])
  function goForLogin() {
    setShowLoginModal(true)
  }
    return(
      <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">REDC</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          {isLoggedIn && <span>welcome {userName}</span>}
          {isLoggedIn && <Button variant="danger" className="ms-1">Logout</Button>}
          {!isLoggedIn && <Button variant="success" className='ms-1' onClick={goForLogin}>Login</Button>}
        </Container>
      </Navbar>
      { showLoginModal && <Login>sign Up</Login> }
      </>
    )
}
export default NavBar