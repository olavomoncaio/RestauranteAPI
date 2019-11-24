import React, { useEffect } from "react";
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
    minHeight: '100%'
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
  icone: {
    color: 'red',
    cursor: 'pointer'
  }
}));

export default function Cardapio() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Cardápio";
  })

  return (
    <>
      <div className={classes.containerCardapio}>
        <p className={classes.setor}>Pizzas:  </p>
        <div className="row">
          <div className="col-md-5">
            <div className={classes.titulo}>
              Mussarela <span className={classes.icone}><Icon>clear</Icon></span>
            </div>
            <div className={classes.subtitulo}>
              Mussarela, tomare e azeitonas.
            </div>
            <div className={classes.preco}>
              R$ 39,90
            </div>
          </div>
          <div className="col-md-5">
            <div className={classes.titulo}>
              Mussarela
            </div>
            <div className={classes.subtitulo}>
              Mussarela, tomare e azeitonas.
            </div>
            <div className={classes.preco}>
              R$ 39,90
            </div>
          </div>
        </div>
        <div className="row" id="pizzas">
          <div className="col-md-5">
            <div className={classes.titulo}>
              Mussarela
            </div>
            <div className={classes.subtitulo}>
              Mussarela, tomare e azeitonas.
            </div>
            <div className={classes.preco}>
              R$ 39,90
            </div>
          </div>
          <div className="col-md-5">
            <div className={classes.titulo}>
              Mussarela
            </div>
            <div className={classes.subtitulo}>
              Mussarela, tomare e azeitonas.
            </div>
            <div className={classes.preco}>
              R$ 39,90
            </div>
          </div>
        </div>
        <p className={classes.setor2}>Bebidas:  </p>
        <div className="row" id="pizzas">
          <div className="col-md-5">
            <div className={classes.titulo}>
              Coca-Cola
            </div>
            <div className={classes.subtitulo}>
              2 Litros
            </div>
            <div className={classes.preco}>
              R$ 12,90
            </div>
          </div>
          <div className="col-md-5">
            <div className={classes.titulo}>
              Guaraná Antartica
            </div>
            <div className={classes.subtitulo}>
              2 Litros
            </div>
            <div className={classes.preco}>
              R$ 11,90
            </div>
          </div>
        </div>
        <div className={classes.crudbebida}>
          <CrudBebida></CrudBebida>
        </div>
        <div className={classes.crudcard}>
          <CrudCardapio></CrudCardapio>
        </div>

      </div>
    </>
  );
} 