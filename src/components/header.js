import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import styles from "./header.module.scss";

let isToggled = true;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleNavbar() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <header>
        <Navbar
          collapseOnSelect
          variant="dark"
          expand="md"
          fixed="top"
          className={`${styles.navbar} ${
            this.state.isOpen ? styles.isOpen : ""
          }`}
          onToggle={() => this.toggleNavbar()}
        >
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.navbarToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.nav}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#diensten">Diensten</Nav.Link>
              <Nav.Link href="#over">Over Mij</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

function toggled() {
  isToggled = !isToggled;
  console.log("Toggled baby");
}
