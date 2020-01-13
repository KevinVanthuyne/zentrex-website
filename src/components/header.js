import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default () => (
  <header>
    <Navbar bg="light" expand="md">
      <Navbar.Brand>Zentrex</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Over Mij</Nav.Link>
          <Nav.Link href="#">Diensten</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)
