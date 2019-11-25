import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Cabecalho from "../Cabecalho"
import Rodape from "../Rodape"


const useStyles = makeStyles(tema => ({
  pagina: {
    position: "relative",
    paddingBottom: "16vh",
    minHeight: "100vh",
    boxSizing: "border-box"
  },
  conteudo: {
    display: "flex",
  }
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.pagina}>
      <Cabecalho></Cabecalho>
      <div className={classes.conteudo}>{children}</div>
      <Rodape></Rodape>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object
};

