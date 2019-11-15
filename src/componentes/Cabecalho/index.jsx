import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";
import Icon from '@material-ui/core/Icon';

export default function Cabecalho() {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"><Icon>restaurant</Icon></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#pricing">Faça seu pedido</Nav.Link>
            <NavDropdown title="Cardápio" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Comidas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bebidas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Olá, Nome do usuário</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
} 