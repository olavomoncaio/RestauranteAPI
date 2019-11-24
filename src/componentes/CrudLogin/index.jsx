import React, { useState } from "react";
import useForm from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(tema => ({
  label: {
    fontWeight: 'bold',
    display: 'block'
  },
  input: {
    marginTop: '-1%'
  },
  erros: {
    color: 'red',
  },
  logado: {
    fontWeight: 'bold'
  }
}));


const CrudLogin = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const [usuario, setUsuario] = useLocalState('usuario');

  function useLocalState(localItem) {
    const [loc, setState] = useState(localStorage.getItem(localItem));

    function setLoc(newItem) {
      localStorage.setItem(localItem, newItem);
      setState(newItem);
    }

    return [loc, setLoc];
  }

  function setar(user) {
    if (user) {
      fetch('http://www.mocky.io/v2/5ddaf3c23100007a00605f05')
        .then(response => {
          response.json().then(data => {
            setUsuario(data.nome);
            window.location.href = "http://localhost:3000";
          });
        })
    }
  }

  const onSubmit = values => {
    console.log(values);
    setar(values);
  };

  return (
    <>
      {usuario === null ?
        <div className={classes.formulario}>
          <form onSubmit={handleSubmit(onSubmit)}>

            <label className={classes.label}>E-mail</label>
            <input
              size="35"
              className={classes.input}
              name="email"
              ref={register({
                required: 'Este campo é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "E-mail inválido"
                }
              })}
            />
            <div className={classes.erros}>
              {errors.email && errors.email.message}
            </div>
            <br />
            <label className={classes.label}>Senha</label>
            <input
              type="password"
              size="35"
              className={classes.input}
              name="senha"
              ref={register({
                required: 'Este campo é obrigatório',
              })}
            />
            <div className={classes.erros}>
              {errors.senha && errors.senha.message}
            </div>
            <br />
            <button>Entrar</button>
          </form>
        </div>
        :
        <div className={classes.logado}>
          Bem-vindo, {usuario}!
       </div>
      }
    </>
  )
};

export default CrudLogin;