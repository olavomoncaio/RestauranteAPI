import React, {useEffect} from "react";
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
  },
}));

const CrudBebida = ({ atualizarEstado, bebida }) => {
  const classes = useStyles();
  const { handleSubmit, register, errors, setValue } = useForm();

  useEffect(() => {
    if(bebida){
      setValue('nome', bebida.nome);
      setValue('quantidade', bebida.quantidade);
      setValue('preco', bebida.preco);
      setValue('disponivel', bebida.disponivel);
    }
  })

  const onSubmit = values => {
    if (!bebida) {
      console.log(values);
      fetch('http://localhost:8080/bebida', {
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
            alert("Bebida cadastrada com sucesso!");
          }
        })
    }
    else {
      fetch(`http://localhost:8080/bebida/${bebida.id}`, {
        method: 'put',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
        .then(response => {
          if (response.ok) {
            alert("Bebida atualizada com sucesso!");
            navigate("/cardapio");
          }
        })
    }
  };

  return (
    <div className={classes.card}>
      <p className={classes.titulo}>Cadastro de Bebidas</p>
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
            <label className={classes.label}>Quantidade (Ml ou L)</label>
            <input
              size="36"
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
        <div className="row">
          <div className="col-md-6">
            <label className={classes.label}>Preço</label>
            <input
              size="20"
              className={classes.input}
              name="preco"
              ref={register({
                required: 'Este campo é obrigatório.',
              })}
            />
            <div className={classes.erros}>
              {errors.preco && errors.preco.message}
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
          </div>
        </div>
        <br />
        {!bebida ? <Botao Primaria text="Cadastrar Bebida" isSubmit></Botao>
          :
          <Botao Primaria text="Atualizar bebida" isSubmit></Botao>
        }
      </form>
    </div>
  );
};

export default CrudBebida;