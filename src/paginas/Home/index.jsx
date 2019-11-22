import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../../estilos/estilosGlobais.css'

const useStyles = makeStyles(tema => ({
  containerHome: {
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    height: '1280px'
  },
  link: {
    textDecoration: 'none'
  },
  home: {
    width: '70%',
    marginLeft: '15%',
    padding: '28%'
  },
  titulo: {
    color: 'white',
    textShadow: '3px 0 0 black, -3px 0 0 black, 0 3px 0 black, 0 -3px 0 black, 1.5px 1.5px black, -1.5px -1.5px 0 black, 1.5px -1.5px 0 black, -1.5px 1.5px 0 black',
    textAlign: 'center',
    fontSize: '5.5em !important',
    borderRadius: '15px',
    width: '60%',
    marginLeft: '20%',
    backgroundColor: 'wheat'
  }
}));

export default function Home() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "IF Restaurante";
  })

  return (
    <>
      <div className={classes.containerHome}>
        <div className={classes.titulo}>
          Instituto Federal da Santa Pizza
        </div>
        <div className={classes.home}>

        </div>

      </div>
    </>
  );
} 