import React from "react";
import Fab from "@material-ui/core/Fab";
import PropTypes from "prop-types";
import { A } from "hookrouter";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import tema from "../../estilos/tema";

const useStyles = makeStyles(() => ({
  botaoGlobal: {
    textTransform: "none",
    fontSize: "14px",
    lineHeight: "20px",
    fontStyle: "normal",
    fontFamily: tema.typography.fontFamily,
    fontWeight: "bold"
  },
  botaoPrimario: {
    "&:hover": {
      backgroundColor: tema.palette.primary.main,
      color: tema.palette.background.default
    },
    backgroundColor: tema.palette.primary.main,
    color: tema.palette.background.default
  },
  botaoSecundario: {
    "&:hover": {
      backgroundColor: tema.palette.secondary.main,
      color: tema.palette.background.default
    },
    backgroundColor: tema.palette.secondary.main,
    color: tema.palette.background.default
  },
  botaoPrimarioBorda: {
    "&:hover": {
      backgroundColor: tema.palette.background.default,
      border: "1px solid",
      borderColor: tema.palette.primary.main,
      color: tema.palette.primary.main
    },
    backgroundColor: tema.palette.background.default,
    border: "1px solid",
    borderColor: tema.palette.primary.main,
    color: tema.palette.primary.main
  },
  botaoSecundarioBorda: {
    "&:hover": {
      backgroundColor: tema.palette.background.default,
      border: "1px solid",
      borderColor: tema.palette.secondary.main,
      color: tema.palette.secondary.main
    },
    backgroundColor: tema.palette.background.default,
    border: "1px solid",
    borderColor: tema.palette.secondary.main,
    color: tema.palette.secondary.main
  },
  sizeButtonFabMin: {
    minWidth: "100px"
  },
  paddingButton: {
    paddingRight: "10px"
  },
  removerDecoracao: {
    textDecoration: "none"
  }
}));

function Botao(props) {
  const {
    text,
    isFullWidth,
    isSubmit,
    onClick,
    Secundaria,
    Primaria,
    icon,
    PrimariaBorda,
    SecundariaBorda,
    svg,
    estilo
  } = props;
  const classes = useStyles();

  let botao = isFullWidth
    ? classes.sizeButtonFabFull
    : classes.sizeButtonFabMin;
  botao = classes.botaoGlobal;

  if (Primaria) {
    botao = `${botao} ${classes.botaoPrimario}`;
  }

  if (Secundaria) {
    botao = `${botao} ${classes.botaoSecundario}`;
  }

  if (PrimariaBorda) {
    botao = `${botao} ${classes.botaoPrimarioBorda}`;
  }

  if (SecundariaBorda) {
    botao = `${botao} ${classes.botaoSecundarioBorda}`;
  }

  return (
    <div className={classes}>
      <Fab
        className={botao}
        onClick={isSubmit ? () => {} : onClick}
        type={isSubmit ? "submit" : "button"}
        variant="extended"
        style={(estilo != null) ? estilo : {height: '40px', padding: '0 20px'}}
      >
        {icon ? (
          <>
            <img alt="Ícone" className={classes.paddingButton} src={svg} />{" "}
            {text}
          </>
        ) : (
          <>{text}</>
        )}
      </Fab>
    </div>
  );
}

export function ButtonLink({ text, path, isSecondary, icon }) {
  const classes = useStyles();

  let cls;

  if (isSecondary) {
    cls = `${classes.botaoSecundario}`;
  }

  return (
    <A
      className={classes.removerDecoracao}
      href={path}
      style={{ width: "100%" }}
    >
      <Fab className={cls} color="primary" variant="extended">
        {icon && <Icon>{icon}</Icon>}&nbsp;
        {text}
      </Fab>
    </A>
  );
}

ButtonLink.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  isSecondary: PropTypes.bool,
  icon: PropTypes.string
};

Botao.propTypes = {
  isFullWidth: PropTypes.bool,
  Primaria: PropTypes.bool,
  Secundaria: PropTypes.bool,
  PrimariaBorda: PropTypes.bool,
  SecundariaBorda: PropTypes.bool,
  isSubmit: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.bool,
  svg: PropTypes.string
};

export default Botao;
