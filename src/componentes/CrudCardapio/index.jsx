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
    marginBottom: '2%'
  }
}));

const CrudCardapio = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-3">
          <label className={classes.label}>Nome</label>
          <input
            size="35"
            className={classes.input}
            name="nome"
            ref={register({
              required: 'Este campo é obrigatório.',
            })}
          />
          {errors.nome && errors.nome.message}
        </div>
        <div className="col-md-5">
          <label className={classes.label}>Ingredientes</label>
          <input
            size="70"
            className={classes.input}
            name="ingredientes"
            ref={register({
              required: 'Este campo é obrigatório.',
            })}
          />
          {errors.ingredientes && errors.ingredientes.message}
        </div>
      </div>
      <label className={classes.label}>Preço</label>
      <input
        className={classes.input}
        name="preco"
        ref={register({
          required: 'Este campo é obrigatório.',
        })}
      />
      {errors.preco && errors.preco.message}
      <br />
      <Botao Primaria text="Cadastrar Pizza" isSubmit></Botao>
    </form>
  );
};

export default CrudCardapio;