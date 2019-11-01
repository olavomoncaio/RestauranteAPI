import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { A } from "hookrouter";
import Botao from '../../componentes/Botao'

const useStyles = makeStyles(tema => ({
  anchor: {
    textDecoration: "none"
  },
  icone: {
    verticalAlign: "middle"
  },
  naoEncontrada: {
    textAlign: "center",
    padding: '3% 0% 3% 0%',
    border: '1px solid #E0E0E0',
    background: '#FFFFFF',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '80%',
    marginTop: '10%',
    marginLeft: '10%'
  },
  p: {
    fontWeight: 'bold'
  },
  link: {
    textDecoration: 'none'
  }
}));

export default function PaginaNaoEncontrada() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.naoEncontrada}>
      <p className={classes.p}>Ops...</p>
      <p className={classes.p}>A página não foi encontrada :(</p>
        <A href="/home" className={classes.link}>
          <Botao Primaria text="Voltar para a Home"></Botao>
        </A>
      </div>
    </div>
  );
}
