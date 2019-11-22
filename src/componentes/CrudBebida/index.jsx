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
  },
  erros: {
    color: 'red',
  },
}));

const CrudBebida = () => {
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
          <div className={classes.erros}>
            {errors.nome && errors.nome.message}
          </div>
        </div>
        <div className="col-md-2">
          <label className={classes.label}>Quantidade (Ml ou L)</label>
          <input
            size="10"
            className={classes.input}
            name="quantidade"
            ref={register({
              required: 'Este campo é obrigatório.',
            })}
          />
          <div className={classes.erros}>
            {errors.quantidade && errors.quantidade.message}
          </div>
        </div>
      </div>
      <label className={classes.label}>Preço</label>
      <input
        className={classes.input}
        name="preco"
        ref={register({
        })}
      />
      <Botao Primaria text="Cadastrar Bebida" isSubmit></Botao>
    </form>
  );
};

export default CrudBebida;