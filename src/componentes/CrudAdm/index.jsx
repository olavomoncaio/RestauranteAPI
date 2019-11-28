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
  botao: {
    marginTop: '3%'
  }
}));

const CrudAdm = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    if (values.senhaAutorizacao === "admin") {
      fetch('http://localhost:8080/usuario', {
        method: 'post',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
        .then(response => {
          if (response.ok) {
            window.location.href = "http://localhost:3000/"
          }
        })
    }
    else {
      alert("Senha administrativa incorreta!")
    }
  };

  return (
    <div className={classes.card}>
      <p className={classes.titulo}>Cadastro de Administrador</p>
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
            <label className={classes.label}>Email</label>
            <input
              size="35"
              className={classes.input}
              name="email"
              ref={register({
                required: 'Este campo é obrigatório.',
              })}
            />
            <div className={classes.erros}>
              {errors.email && errors.email.message}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className={classes.label}>Senha para Login</label>
            <input
              type="password"
              size="35"
              className={classes.input}
              name="senha"
              ref={register({
                required: 'Este campo é obrigatório.',
              })}
            />
            <div className={classes.erros}>
              {errors.senha && errors.senha.message}
            </div>
          </div>
          <div className="col-md-6">
            <label className={classes.label}>Senha de Autorização</label>
            <input
              type="password"
              size="35"
              className={classes.input}
              name="senhaAutorizacao"
              ref={register({
                required: 'Este campo é obrigatório.',
              })}
            />
            <div className={classes.erros}>
              {errors.senhaAutorizacao && errors.senhaAutorizacao.message}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label className={classes.label}>Endereço</label>
            <input
              size="35"
              className={classes.input}
              name="endereco"
              ref={register({
                required: 'Este campo é obrigatório.',
              })}
            />
            <div className={classes.erros}>
              {errors.endereco && errors.endereco.message}
            </div>
          </div>
          <div className="col-md-6">
            <label className={classes.label}>Cargo</label>
            <input
              size="35"
              className={classes.input}
              name="cargo"
              ref={register({
                required: 'Este campo é obrigatório.',
              })}
            />
            <div className={classes.erros}>
              {errors.cargo && errors.cargo.message}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label className={classes.label}>Telefone</label>
            <input
              size="35"
              className={classes.input}
              name="telefone"
              ref={register({
                required: 'Este campo é obrigatório.',
              })}
            />
            <div className={classes.erros}>
              {errors.telefone && errors.telefone.message}
            </div>
          </div>
          <div className="col-md-6">
            <label className={classes.label}>Celular</label>
            <input
              size="35"
              className={classes.input}
              name="celular"
              ref={register({
                required: 'Este campo é obrigatório.',
              })}
            />
            <div className={classes.erros}>
              {errors.celular && errors.celular.message}
            </div>
          </div>
          <div className="col-md-6">
            <label className={classes.label}>Ativo</label>
            <select
              className={classes.input}
              name="ativo"
              ref={register({
                required: 'Este campo é obrigatório.',
              })}
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
            <div className={classes.erros}>
              {errors.ativo && errors.ativo.message}
            </div>
          </div>
        </div>
        <div className={classes.botao}>
          <Botao Primaria text="Cadastrar" isSubmit></Botao>
        </div>
      </form>
    </div>
  );
};

export default CrudAdm;