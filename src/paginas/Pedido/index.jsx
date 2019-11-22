import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../../estilos/estilosGlobais.css'

const useStyles = makeStyles(tema => ({
  containerPedido: {
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    height: '1280px'
  }
}));

export default function Pedido() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Pedido";
  })

  return (
    <>
      <div className={classes.containerPedido}>
        <div className={classes.titulo}>
          Instituto Federal da Santa Pizza
        </div>
        <div className={classes.home}>

        </div>

      </div>
    </>
  );
} 