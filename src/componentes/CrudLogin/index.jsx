import React from "react";
import useForm from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Botao from '../Botao/index'

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
}));

const CrudLogin = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
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
      <Botao Secundaria text="Entrar" isSubmit></Botao>
    </form>
  );
};

export default CrudLogin;