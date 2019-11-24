import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(tema => ({
  footer: {
    width: "100%",
    backgroundColor: tema.palette.background.primary,
    height: "16vh",
    position: "absolute",
    bottom: 0
  },
  infos: {
    color: 'white',
    fontWeight: '500',
    marginLeft: '45%'
  },
  devs: {
    color: '#FF6339',
    fontWeight: 'bold',
    marginTop: '7%',
    marginLeft: '45%'
  }
}));

const Rodape = () => {
  const classes = useStyles();
  let footer = classes.footer;

  return (
    <div className={footer}>
      <Grid container>
        <Grid item xs={3} className={classes.gridStart}>
          <div className={classes.devs}>
            Contato:
          </div>
          <div className={classes.infos}>
            Telefone: (11)93231-1233 <br />
            Rua Augusta 123 <br />
            São Paulo - SP <br />
            ifspizzas@outlook.com
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className={classes.devs}>
            Atendimento:
        </div>
          <div className={classes.infos}>
            Segunda a quinta: 18h - 23h <br />
            Sexta a Domingo: 18h - 1h <br />
            Vésperas e Feriados: 18h - 1h
          </div>
        </Grid>
        <Grid item xs={4} className={classes.gridEnd}>
          <div className={classes.devs}>
            Desenvolvido por:
        </div>
          <div className={classes.infos}>
            Olavo Moncaio Grilenzoni - GU3002446<br />
            Igor Keiki Yamashita - GU3001644 <br />
            Rafael Dionisio - GU300xxxx
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Rodape;
