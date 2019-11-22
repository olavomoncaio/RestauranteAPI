import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../../estilos/estilosGlobais.css'
import CrudLogin from '../../componentes/CrudLogin'
import Drinks from '../../imagens/drink-3.jpg'

const useStyles = makeStyles(tema => ({
  containerCardapio: {
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    padding: '5% 10% 5% 10%'
  },
  drink: {
    position: 'absolute',
    right: '5%',
    top: '15%'
  },
  imagem: {
    bordeRadius: '50% !important',
  }
}));

export default function Login() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Login";
  })

  return (
    <>
      <div className={classes.containerCardapio}>
        <CrudLogin></CrudLogin>
        <div className={classes.drink}>
          <img src={Drinks} alt="drinks" className={classes.imagem}></img>
        </div>
      </div>
    </>
  );
} 