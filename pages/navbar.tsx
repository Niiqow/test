import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar_ = () => {

    const [activePage, setActivePage] = useState('/');
    const [scrollPos, setScrollPos] = useState(0);

    const handleLinkClick = () => {
      setScrollPos(window.pageYOffset);
    };
  
  
  
    useEffect(() => {
      setActivePage(window.location.pathname);
      window.scrollTo(0, scrollPos);
    }, [scrollPos]);

    return(
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Anime Info</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Link href="/recientes" legacyBehavior>
            <a className={`nav-link ${activePage === '/recientes' ? 'active' : ''}`}>Episodios Recientes</a>
          </Link>
          <Link href="/popular" legacyBehavior>
            <a className={`nav-link ${activePage === '/popular' ? 'active' : ''}`}>Popular</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>



    )
}

 


export default Navbar_;