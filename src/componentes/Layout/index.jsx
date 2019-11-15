import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Cabecalho from "../Cabecalho"

const useStyles = makeStyles(tema => ({
  container: {
    minHeight: "73.3vh",
  }
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Cabecalho></Cabecalho>
      <Paper className={classes.container}>{children}</Paper>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object
};

