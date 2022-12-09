import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const AppNavBar = () => {
    const cart = useSelector(state => state.cart)
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Link to="/" className='navbar-brand'>Cart App</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className='nav-link'>Products</Link>
          <Link to="cart" className='nav-link'>Cart - {cart.length}</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppNavBar
