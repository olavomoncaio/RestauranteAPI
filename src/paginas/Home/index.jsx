import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { A } from "hookrouter";
import Botao from '../../componentes/Botao'

const useStyles = makeStyles(tema => ({
  container: {
    marginTop: '2%',
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    paddingTop: '5%'
  },
  link: {
    textDecoration: 'none'
  },
  home: {
    backgroundColor: '#E9ECEF',
    width: '70%',
    marginLeft: '15%',
    padding: '5%'
  }
}));

export default function Home() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "IF Restaurante";
  })

  return (
    <>
    <div className={classes.container}>
      <div className={classes.home}>
        <h1>Home</h1>
        <h3>IF Restaurante - O melhor delivery de São Paulo!</h3>
        <A href="/documentacao" className={classes.link}>
          <Botao Primaria text="Documentação"></Botao>
        </A>
      </div>
    </div>
    </>
  );
} 