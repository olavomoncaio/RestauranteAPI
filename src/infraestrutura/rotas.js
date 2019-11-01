import React from "react";
import { useRoutes } from "hookrouter";
import PaginaNaoEncontrada from "../paginas/NaoEncontrada";
import Navegacao from "../componentes/Navegacao";
import Home from "../paginas/Home";

const rotas = {
  "/": () => <Home />,
  "/home": () => <Home />
}

export default function Rotas() {
  const rota = useRoutes(rotas);
  return <Navegacao>{rota || <PaginaNaoEncontrada />}</Navegacao>;
}