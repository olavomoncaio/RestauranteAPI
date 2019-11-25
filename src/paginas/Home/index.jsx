import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { A } from "hookrouter";
import Botao from '../../componentes/Botao'
import Pizza from '../../imagens/bg_1.png'

const useStyles = makeStyles(tema => ({
  anchor: {
    textDecoration: "none"
  },
  icone: {
    verticalAlign: "middle"
  },
  card: {
    textAlign: "center",
    padding: '3% 0% 3% 0%',
    border: '1px solid #E0E0E0',
    background: '#FFFFFF',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '80%',
    marginTop: '7%',
    marginLeft: '10%'
  },
  p: {
    fontWeight: 'bold'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: '50px'
  },
  link: {
    textDecoration: 'none'
  },
  pizza: {
    padding: '2% 10% 0% 10%',
    marginBottom: '3%'
  }
}));

export default function Home() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Home";
  })

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <p className={classes.titulo}>Instituto Federal da Santa Pizza - IFSP</p>
        <p className={classes.p}>O melhor da pizza está aqui!</p>
        <A href="/sobre" className={classes.link}>
          <Botao Primaria text="Quem somos"></Botao>
        </A>
      </div>
      <div className={classes.pizza}>
        <img src={Pizza} alt="pizza" width="20%"></img>
        <img src={Pizza} alt="pizza" width="20%"></img>
        <img src={Pizza} alt="pizza" width="20%"></img>
        <img src={Pizza} alt="pizza" width="20%"></img>
        <img src={Pizza} alt="pizza" width="20%"></img>
      </div>
    </div>
  );
}
