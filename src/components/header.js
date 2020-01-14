import React from "react"
import { Navbar, Nav } from "react-bootstrap"

import styles from "./header.module.css"

export default () => (
  <header>
    <Navbar variant="dark" expand="md" fixed="top" className={styles.navbar}>
      {/* <Navbar.Brand>Zentrex</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles.nav}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#over">Over Mij</Nav.Link>
          <Nav.Link href="#diensten">Diensten</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)
