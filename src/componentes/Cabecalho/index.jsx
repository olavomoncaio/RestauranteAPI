import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
import '../../estilos/tema.css'
import { navigate } from "hookrouter";

const useStyles = makeStyles(tema => ({
  link: {
    textDecoration: 'none',
  }
}));

function viajar(caminho) {
  navigate(caminho);
}

export default function Cabecalho() {
  const [usuario] = useLocalState('usuario');

  function useLocalState(localItem) {
    const [loc, setState] = useState(localStorage.getItem(localItem));

    function setLoc(newItem) {
      localStorage.setItem(localItem, newItem);
      setState(newItem);
    }

    return [loc, setLoc];
  }

  const classes = useStyles();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"><Icon>restaurant</Icon></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => viajar("/home")}>Home</Nav.Link>
            <Nav.Link onClick={() => viajar("/cardapio")}>Cardápio</Nav.Link>
            <Nav.Link className={classes.link} onClick={() => viajar("/sobre")}>
              Sobre
            </Nav.Link>
          </Nav>
          <Nav>
            {usuario === null ?
              <>
                <Nav.Link eventKey={2} onClick={() => viajar("/login")}>Login</Nav.Link>
                <Nav.Link eventKey={2} onClick={() => viajar("/cadastro")}>Cadastro</Nav.Link>
              </>
              :
              <>
                <Nav.Link href="#deets">Olá, {usuario}</Nav.Link>
                <Nav.Link href="#deets">Sair</Nav.Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
} 