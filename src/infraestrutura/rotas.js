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

const rotas = {
  "/": () => <Home />,
  "/home": () => <Home />,
  "/sobre": () => <Sobre />,
  "/pedido": () => <Pedido />,
  "/cardapio": () => <Cardapio />,
  "/login": () => <Login />,
  "/cadastro": () => <Cadastro />
}

export default function Rotas() {
  const rota = useRoutes(rotas);
  return <Navegacao>{rota || <PaginaNaoEncontrada />}</Navegacao>;
}