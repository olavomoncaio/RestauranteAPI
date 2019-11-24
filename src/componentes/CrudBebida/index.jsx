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
  card: {
    padding: '3% 3% 3% 3%',
    border: '1px solid #E0E0E0',
    background: '#FFFFFF',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '70%',
    marginTop: '7%',
  },    
  titulo: {
    fontWeight: 'bold',
    fontSize: '35px'
  },
}));

const CrudBebida = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div className={classes.card}>
      <p className={classes.titulo}>Cadastro de Bebidas</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-5">
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
          <div className="col-md-5">
            <label className={classes.label}>Quantidade (Ml ou L)</label>
            <input
              size="20"
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
    </div>
  );
};

export default CrudBebida;