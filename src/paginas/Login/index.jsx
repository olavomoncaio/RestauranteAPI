import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../../estilos/estilosGlobais.css'
import CrudLogin from '../../componentes/CrudLogin'
import Drinks from '../../imagens/drink-3.jpg'

const useStyles = makeStyles(tema => ({
  containerCardapio: {
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    padding: '0% 10% 0% 0%',
    display: 'flex',
    width: '100%'
  },
  drink: {
    width: '100%'
  },
  imagem: {
   marginLeft: '-20%',
   opacity: '0.8',
   width: '92.7%'
  },
  login: {
    marginTop: '10%'
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
        <div className={classes.drink}>
          <img src={Drinks} alt="drinks" className={classes.imagem}></img>
        </div>
        <div className={classes.login}>
          <CrudLogin></CrudLogin>
        </div>
      </div>
    </>
  );
} 