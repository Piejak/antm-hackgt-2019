import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import constants from '../constants'

import 'bootstrap/dist/css/bootstrap.min.css';

function Titlebar() {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">{constants.appName}</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        </Container>
    </Navbar>
  );
}

export default Titlebar;
