import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pizza from "../../imagens/pizza-1.jpg"

const useStyles = makeStyles(tema => ({
  anchor: {
    textDecoration: "none"
  },
  icone: {
    verticalAlign: "middle"
  },
  card: {
    textAlign: "center",
    padding: '3% 0% 3% 0%',
    border: '1px solid #E0E0E0',
    background: '#FFFFFF',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '80%',
    marginTop: '7%',
    marginLeft: '10%',
    marginBottom: '5%'
  },
  p: {
    fontWeight: 'bold',
    marginLeft: "25%",
    marginRight: "25%",
    textAlign: 'justify'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: '50px'
  },
  link: {
    textDecoration: 'none'
  },
  destaque: {
    color: '#FF6339'
  },
  pizza: {
    borderRadius: '15px'
  },
  imagem: {
    marginTop: '3%'
  }
}));

export default function Sobre() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Home";
  })

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <p className={classes.titulo}>Quem somos: </p>
        <p className={classes.p}>
          O Instituto Federal da Santa Pizza nasceu de um projeto no Instituto Federal de São Paulo,
          que visa integrar uma API utilizando Spring Java e ReactJS.</p>
        <p className={classes.p}>
          <span className={classes.destaque}>A Pizzaria:   </span>
            Nasceu a ideia de negócio de uma pizzaria quando vimos que uma paixão em comum dos 3
            desenvolvedores é pizza. Massa leve e bem feita, molho de tomate natural, diferente
            dos industrializados e cheios de sódio do mercado, ingredientes selecionados e preparados
            com carinho.
        </p>
        <p className={classes.p}>
          <span className={classes.destaque}>Administração:   </span>
              No inicio, quando existia apenas a ideia, a pizzaria tinha apenas 3 funcionários, que na realidade
              eram seus donos e desenvolvedores. Mas como qualquer local que venda comidas de qualidades, precisavamos
              de um pizzaiolo que amava o que fazia.
          </p>
          <p className={classes.p}>
          <span className={classes.destaque}>Clientes:   </span>
              Tudo o que fazemos é para satisfazer nossos clientes. Cada sabor, detalhe, textura e apresentação faz parte
              do nosso padrão, para cada vez mais levarmos nossas pizzas ao mundo.
          </p>
          <p className={classes.p}>
          <span className={classes.destaque}>Projeto:   </span>
              Desenvolvimento de APIs com Spring Java para serem consumidas pelo Front-end, que está em ReactJS, utilizando Javascript,
              HTML, CSS e Node. As APIs fazem todo o contato com o banco de dados, buscando e inserindo dados, também atualizando e excluindo,
              tendo os principais métodos de uma API, que são GET, POST, DELETE e PUT. O sistema possuí cruds para usuários comuns e para 
              administradores, que podem realizar inserções de pizzas no cardápio.
          </p>
          <div className={classes.imagem}>
            <img src={Pizza} alt="pizza" className={classes.pizza}></img>
          </div>
      </div>  
    </div>
  );
}
