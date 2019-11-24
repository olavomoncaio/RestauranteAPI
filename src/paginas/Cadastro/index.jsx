import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../../estilos/estilosGlobais.css'
import CrudAdm from '../../componentes/CrudAdm'

const useStyles = makeStyles(tema => ({
  containerCardapio: {
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    padding: '5% 10% 5% 25%',
    minHeight: '100%'
  }
}));

export default function Cadastro() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Cardápio";
  })

  return (
    <>
      <div className={classes.containerCardapio}>
  
        <div className={classes.crudbebida}>
          <CrudAdm></CrudAdm>
        </div>

      </div>
    </>
  );
} 