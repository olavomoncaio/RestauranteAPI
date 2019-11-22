import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../../estilos/estilosGlobais.css'
import CrudCardapio from '../../componentes/CrudCardapio'
import CrudBebida from '../../componentes/CrudBebida'

const useStyles = makeStyles(tema => ({
  containerCardapio: {
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    padding: '5% 10% 5% 25%'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: '23px',
    textDecoration: 'underline'
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
        <div className="row">
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
        <div className="row">
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
        <div className="row">
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
        {/* <CrudCardapio></CrudCardapio>
        <CrudBebida></CrudBebida> */}
      </div>
    </>
  );
} 