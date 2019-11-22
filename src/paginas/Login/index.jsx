import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../../estilos/estilosGlobais.css'

const useStyles = makeStyles(tema => ({
  containerLogin: {
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    height: '1280px'
  }
}));

export default function Login() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Login";
  })

  return (
    <>
      <div className={classes.containerLogin}>
        <div className={classes.titulo}>
          Instituto Federal da Santa Pizza
        </div>
        <div className={classes.home}>

        </div>

      </div>
    </>
  );
} 