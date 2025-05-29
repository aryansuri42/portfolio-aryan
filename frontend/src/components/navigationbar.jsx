import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="#introduction">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar-nav" />
        <Navbar.Collapse id="portfolio-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#introduction">Introduction</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

