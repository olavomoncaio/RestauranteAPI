import React, { useEffect } from "react";
import useForm from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Botao from '../Botao/index'
import { navigate } from "hookrouter";

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
  }
}));

const CrudCardapio = ({ atualizarEstado, pizza }) => {
  const classes = useStyles();
  const { handleSubmit, register, errors, setValue } = useForm();

  useEffect(() => {
    if(pizza){
      setValue('nome', pizza.nome);
      setValue('ingredientes', pizza.ingredientes);
      setValue('preco', pizza.preco);
      setValue('disponivel', pizza.disponivel);
    }
  })

  const onSubmit = values => {
    if (!pizza) {
      fetch('http://localhost:8080/pizza', {
        method: 'post',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
        .then(response => {
          if (response.ok) {
            atualizarEstado();
            window.scrollTo(0, 0);
            alert("Pizza cadastrada com sucesso!");
          }
        })
    }
    else {
      fetch(`http://localhost:8080/pizza/${pizza.id}`, {
        method: 'put',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
        .then(response => {
          if (response.ok) {
            alert("Pizza atualizada com sucesso!");
            navigate("/cardapio");
          }
        })
    }
  };

  return (
    <div className={classes.card}>
      <p className={classes.titulo}>Cadastro de Pizzas</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <label className={classes.label}>Preço</label>
            <input
              className={classes.input}
              name="preco"
              ref={register({
                required: 'Este campo é obrigatório.',
              })}
            />

          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <label className={classes.label}>Ingredientes</label>
            <input
              size="50"
              className={classes.input}
              name="ingredientes"
              ref={register({
                required: 'Este campo é obrigatório.',
              })}
            />
            <div className={classes.erros}>
              {errors.ingredientes && errors.ingredientes.message}
            </div>
          </div>
          <div className="col-md-5">
            <label className={classes.label}>Disponivel</label>
            <select
              className={classes.input}
              name="disponivel"
              ref={register({
                required: 'Este campo é obrigatório.',
              })}
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
            <div className={classes.erros}>
              {errors.disponivel && errors.disponivel.message}
            </div>
          </div>
        </div>
        <br />
        {!pizza ? <Botao Primaria text="Cadastrar Pizza" isSubmit></Botao>
          :
          <Botao Primaria text="Atualizar pizza" isSubmit></Botao>
        }
      </form>
    </div>
  );
};

export default CrudCardapio;