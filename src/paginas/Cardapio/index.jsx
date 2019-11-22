import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../../estilos/estilosGlobais.css'

const useStyles = makeStyles(tema => ({
    containerCardapio: {
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    height: '1280px'
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
    
      </div>
    </>
  );
} 