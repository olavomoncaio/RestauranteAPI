import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../../estilos/estilosGlobais.css'
import CrudCardapio from '../../componentes/CrudCardapio'
import CrudBebida from '../../componentes/CrudBebida'

const useStyles = makeStyles(tema => ({
    containerCardapio: {
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    padding: '5% 10% 5% 10%'
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
        <CrudCardapio></CrudCardapio>
        <CrudBebida></CrudBebida>
      </div>
    </>
  );
} 