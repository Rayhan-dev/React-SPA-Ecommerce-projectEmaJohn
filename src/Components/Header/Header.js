import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">
              <img src="logo.svg" alt="" />
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="/order">Order</Nav.Link>
              <Nav.Link href="/reviewOrder">Review Order</Nav.Link>
              <Nav.Link href="/inventory">Manage Inventory</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </>
    </div>
  );
};

export default Header;
