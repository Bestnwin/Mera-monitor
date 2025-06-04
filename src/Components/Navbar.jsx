import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import RegisterModal from "./RegisterModal";

function NavScrollExample() {
  const [showModal, setShowModal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const openRegisterModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // Hide on scroll down past 50px
      } else {
        setShowNavbar(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <RegisterModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <Navbar
        expand="lg"
        style={{
          backgroundColor: '#f3e8ff',
          position: "fixed",
          width: "100%",
          top: 0,
          transition: "transform 0.3s ease",
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
          zIndex: 9999,
        }}
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: '#5e17eb', fontWeight: 'bold' }}>
            <img src="/images/logo.png" className="navbar-logo" height="10" style={{ marginRight: '10px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="#home" style={{ color: '#4c4c4c' }}>Home</Nav.Link>
              <Nav.Link href="#features" style={{ color: '#4c4c4c' }}>Features</Nav.Link>
              <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#support">Support</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-flex gap-2">
              <Button variant="outline-dark" onClick={openRegisterModal}>Sign Up</Button>
              <Button variant="outline-dark" style={{ backgroundColor: '#c084fc', border: 'none' }} onClick={openRegisterModal}>
                Login
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
