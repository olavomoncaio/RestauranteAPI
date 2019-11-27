import React from "react";
import { useRoutes } from "hookrouter";
import PaginaNaoEncontrada from "../paginas/NaoEncontrada";
import Navegacao from "../componentes/Navegacao";
import Home from "../paginas/Home";
import Sobre from "../paginas/Sobre";
import Cardapio from "../paginas/Cardapio";
import Pedido from "../paginas/Pedido";
import Login from "../paginas/Login";
import Cadastro from "../paginas/Cadastro";
import EditPizza from "../componentes/PutCard"

const rotas = {
  "/": () => <Home />,
  "/home": () => <Home />,
  "/sobre": () => <Sobre />,
  "/pedido": () => <Pedido />,
  "/cardapio": () => <Cardapio />,
  "/login": () => <Login />,
  "/cadastro": () => <Cadastro />,
  "/crudPizza/:id": ({id}) => <EditPizza id={id} />
}

export default function Rotas() {
  const rota = useRoutes(rotas);
  return <Navegacao>{rota || <PaginaNaoEncontrada />}</Navegacao>;
}