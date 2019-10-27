import React from 'react';
import logo from './BlackRockLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'

function Footer(){
    return(
        <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#home">
        <img
        src={logo}
        width="120"
        height="40"
        className="d-inline-block align-top"
        alt="BlackRock Logo"
        />
        <Navbar sticky="bottom" />
        </Navbar.Brand>
      </Navbar>
    )
}
export default Footer
