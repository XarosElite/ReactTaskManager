import React from 'react';
import { BrowserRouter as Router, Route, Link , Outlet} from 'react-router-dom';
import Dashboard from './Dashboard';
import Projects from './Projects';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Task Manager</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="settings">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
      
  )
};