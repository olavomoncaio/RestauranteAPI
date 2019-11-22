import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../../estilos/estilosGlobais.css'

const useStyles = makeStyles(tema => ({
  containerSobre: {
    flexGrow: 1,
    fontFamily: tema.typography.fontFamily,
    paddingTop: '5%',
    height: '1078px'
  },
  link: {
    textDecoration: 'none'
  },
  sobre: {
    width: '70%',
    marginLeft: '15%',
    padding: '5%',
    borderRadius: '10px',
    opacity: '0.9'
  },
  titulo: {
      textAlign: 'center'
  }  
}));

export default function Sobre() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Quem somos";
  })

  return (
    <>
    <div className={classes.containerSobre}>
      <div className={classes.sobre}>
         <h1 className={classes.titulo}>Quem Somos:</h1>
        <h3>IF Restaurante - O melhor delivery de São Paulo!       
        </h3>
      </div>
    </div>
    </>
  );
} 