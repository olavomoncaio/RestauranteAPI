import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../../estilos/estilosGlobais.css'
import CrudCardapio from '../../componentes/CrudCardapio'
import CrudBebida from '../../componentes/CrudBebida'
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(tema => ({
  containerCardapio: {
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    padding: '5% 10% 5% 25%',
    minHeight: '100%',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: '23px',

    color: '#4C7DB5'
  },
  crudcard: {
    marginTop: '5%'
  },
  setor: {
    fontWeight: 'bold',
    fontSize: '40px',
    color: '#FF6339',
    marginLeft: '-10%',
    marginBottom: '3%'
  },
  setor2: {
    fontWeight: 'bold',
    fontSize: '40px',
    color: '#FF6339',
    marginLeft: '-10%',
    marginBottom: '3%',
    marginTop: "5%"
  },
  subtitulo: {

    fontWeight: 'bold'
  },
  preco: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  delete: {
    color: 'red',
    cursor: 'pointer'
  },
  edit: {
    color: 'green',
    cursor: 'pointer'
  },
  sabores: {
    backgroundColor: '#F4F2EC',
    width: '50%',
    padding: '5%'
  }
}));

function apagarPizza(nome) {
  return alert(nome);
}

function apagarBebida(nome) {
  return alert(nome);
}


export default function Cardapio() {
  const classes = useStyles();
  const [pizzas, setPizzas] = useState();
  const [bebidas, setBebidas] = useState();
  const [usuario] = useLocalState('usuario');

  function useLocalState(localItem) {
    const [loc, setState] = useState(localStorage.getItem(localItem));

    function setLoc(newItem) {
      localStorage.setItem(localItem, newItem);
      setState(newItem);
    }

    return [loc, setLoc];
  }


  useEffect(() => {
    document.title = "Cardápio";
  })

  useEffect(() => {
    fetch('http://localhost:8080/pizza')
      .then(response => {
        response.json().then(data => {
          setPizzas(data);
        });
      })
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/bebida')
      .then(response => {
        response.json().then(data => {
          setBebidas(data);
        });
      })
  }, []);

  return (
    <>
      <div className={classes.containerCardapio}>
        <p className={classes.setor}>Pizzas:  </p>
        <div className={classes.sabores}>
          {pizzas != null ? pizzas.map((pizza, i) =>
            <div key={i}>
              <div className="col-md-12">
                <div className={classes.titulo}>
                  {pizza.nome} <span className={classes.delete}>
                    <Icon onClick={() => apagarPizza(pizza.id)}>clear</Icon></span>
                  <span className={classes.edit}>
                    <Icon>edit</Icon>
                  </span>
                </div>
                <div className={classes.subtitulo}>
                  {pizza.ingredientes}
                </div>
                <div className={classes.preco}>
                  {pizza.preco}
                </div>
              </div>
              <br />
            </div>
          ) : null}
        </div>

        <p className={classes.setor2}>Bebidas:  </p>
        <div className={classes.sabores}>
          {bebidas != null ? bebidas.map((bebida, i) =>
            <div key={i}>
              <div className="col-md-12">
                <div className={classes.titulo}>
                  {bebida.nome} <span className={classes.delete}>
                    <Icon onClick={() => apagarBebida(bebida.id)}>clear</Icon></span>
                  <span className={classes.edit}>
                    <Icon>edit</Icon>
                  </span>
                </div>
                <div className={classes.subtitulo}>
                  {bebida.quantidade}
                </div>
                <div className={classes.preco}>
                  {bebida.preco}
                </div>
              </div>
              <br />
            </div>
          ) : null}
        </div>
        {usuario !== null ?
          <>
            <div className={classes.crudbebida}>
              <CrudBebida></CrudBebida>
            </div>
            <div className={classes.crudcard}>
              <CrudCardapio></CrudCardapio>
            </div>
          </> :
          null}


      </div>
    </>
  );
} 