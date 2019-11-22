import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
import '../../estilos/tema.css'

const useStyles = makeStyles(tema => ({
  link: {
    textDecoration: 'none',
  }
}));

export default function Cabecalho() {
  const classes = useStyles();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"><Icon>restaurant</Icon></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/pedido">Faça seu pedido</Nav.Link>
            <Nav.Link href="/cardapio">Cardápio</Nav.Link>
              <Nav.Link className={classes.link} href="/sobre">
                Sobre
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Olá, Nome do usuário</Nav.Link>
            <Nav.Link eventKey={2} href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
} 