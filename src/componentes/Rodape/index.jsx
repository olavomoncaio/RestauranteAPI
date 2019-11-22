import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(tema => ({
  footer: {
    width: "100%",
    backgroundColor: tema.palette.background.primary,
    height: "16vh",
    marginTop: "5%"
  }
}));

const Rodape = () => {
  const classes = useStyles();
  let footer = classes.footer;

  return (
    <div className={footer}>
      <Grid container>
        <Grid item xs={2} className={classes.gridStart}>
          
        </Grid>
        <Grid item xs={6}>
         
        </Grid>
        <Grid item xs={3} className={classes.gridEnd}>
        
        </Grid>
      </Grid>
    </div>
  );
};

export default Rodape;
