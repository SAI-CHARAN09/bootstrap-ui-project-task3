import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

export default function TopNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#">Mazer Dashboard</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#"><FaUserCircle /> Profile</Nav.Link>
          <Nav.Link href="#"><FaSignOutAlt /> Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
