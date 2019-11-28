import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../../estilos/estilosGlobais.css'
import CrudCardapio from '../../componentes/CrudCardapio'
import CrudBebida from '../../componentes/CrudBebida'
import Icon from '@material-ui/core/Icon';
import { navigate } from "hookrouter";

const useStyles = makeStyles(tema => ({
  containerCardapio: {
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    padding: '2% 10% 5% 0%',
    minHeight: '100%',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: '23px',
    color: '#4C7DB5',
    display: 'flex'
  },
  setor: {
    fontWeight: 'bold',
    fontSize: '40px',
    color: '#FF6339',
    marginBottom: '3%',
    marginLeft: '5%'
  },
  setor2: {
    fontWeight: 'bold',
    fontSize: '40px',
    color: '#FF6339',
    marginBottom: '3%',
    marginTop: "5%",
    marginLeft: '5%'
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
    width: '90%',
    marginLeft: '5%',
    padding: '5%',
  },
  card: {
    padding: '3% 0% 3% 0%',
    border: '1px solid #E0E0E0',
    background: '#FFFFFF',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '80%',
    marginTop: '7%',
    marginLeft: '15%',
    marginBottom: '5%'
  },
  crudbebida: {
    marginLeft: '10%'
  },
  crudcard: {
    marginTop: '5%',
    marginLeft: '10%'
  },
  indisponivel: {
    fontSize: '11px',
    color: 'red'
  }
}));

function apagarPizza(id, atualizarEstado) {
  fetch(`http://localhost:8080/pizza/${id}`, {
    method: 'delete',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    if (response.ok) {
      atualizarEstado();
      window.scrollTo(0, 0);
      alert("Pizza excluida!");
    }
  })
}

function apagarBebida(id, atualizarEstado) {
  fetch(`http://localhost:8080/bebida/${id}`, {
    method: 'delete',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(id)
  }).then(response => {
    if (response.ok) {
      atualizarEstado();
      window.scrollTo(0, 0);
      alert("Bebida excluida!");
    }
  })
}

export default function Cardapio() {
  const classes = useStyles();
  const [pizzas, setPizzas] = useState();
  const [bebidas, setBebidas] = useState();
  const [bool, setBool] = useState(false);
  const [usuario] = useLocalState('usuario');

  function useLocalState(localItem) {
    const [loc, setState] = useState(localStorage.getItem(localItem));

    function setLoc(newItem) {
      localStorage.setItem(localItem, newItem);
      setState(newItem);
    }

    return [loc, setLoc];
  }

  function atualizarEstado() {
    setBool(!bool);
  }

  function editarPizza(id){
    navigate(`/crudPizza/${id}`);
  }

  function editarBebida(id){
    navigate(`/crudBebida/${id}`);
  }

  useEffect(() => {
    document.title = "Cardápio";
  }, [])

  useEffect(() => {
    fetch('http://localhost:8080/pizza')
      .then(response => {
        response.json().then(data => {
          setPizzas(data);
        });
      })
  }, [bool]);

  useEffect(() => {
    fetch('http://localhost:8080/bebida')
      .then(response => {
        response.json().then(data => {
          setBebidas(data);
        });
      })
  }, [bool]);

  return (
    <>
      <div className={classes.containerCardapio}>
        <div className={classes.card}>
          <p className={classes.setor}>Pizzas  </p>
          <div className={classes.sabores}>
            {pizzas != null ? pizzas.map((pizza, i) =>
              <div key={i}>
                <div className="col-md-12">
                  <div className={classes.titulo}>
                    {pizza.nome} <div className={classes.indisponivel}>{pizza.disponivel === true ? null : "Indisponível"}</div>
                    {usuario !== null ?
                      <>
                     <span className={classes.delete}>
                      <Icon onClick={() => apagarPizza(pizza.id, atualizarEstado)}>clear</Icon></span>
                    <span className={classes.edit}>
                      <Icon onClick={() => editarPizza(pizza.id)}>edit</Icon>
                    </span>
                    </>
                      : null}
                  </div>
                  <div className={classes.subtitulo}>
                    {pizza.ingredientes}
                  </div>
                  <div className={classes.preco}>
                    R$ {pizza.preco}
                  </div>
                </div>
                <br />
              </div>
            ) : null}
          </div>

          <p className={classes.setor2}>Bebidas  </p>
          <div className={classes.sabores}>
            {bebidas != null ? bebidas.map((bebida, i) =>
              <div key={i}>
                <div className="col-md-12">
                  <div className={classes.titulo}>
                    {bebida.nome}  <div className={classes.indisponivel}>{bebida.disponivel === true ? null : "Indisponível"}</div>
                    {usuario !== null ?
                      <>
                        <span className={classes.delete}>
                          <Icon onClick={() => apagarBebida(bebida.id, atualizarEstado)}>clear</Icon></span>
                        <span className={classes.edit}>
                          <Icon onClick={() => editarBebida(bebida.id)}>edit</Icon>
                        </span>
                      </>
                      : null}
                  </div>
                  <div className={classes.subtitulo}>
                    {bebida.quantidade}
                  </div>
                  <div className={classes.preco}>
                    R$ {bebida.preco}
                  </div>
                </div>
                <br />
              </div>
            ) : null}
          </div>
          {usuario !== null ?
            <>
              <div className={classes.crudbebida}>
                <CrudBebida atualizarEstado={atualizarEstado}></CrudBebida>
              </div>
              <div className={classes.crudcard}>
                <CrudCardapio atualizarEstado={atualizarEstado}></CrudCardapio>
              </div>
            </> :
            null}
        </div>
      </div>
    </>
  );
} 