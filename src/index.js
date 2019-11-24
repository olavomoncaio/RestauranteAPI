import React from 'react';
import ReactDOM from 'react-dom';
import Rotas from "./infraestrutura/rotas";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import tema from "./estilos/tema";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
        <MuiThemeProvider theme={tema}>
            <CssBaseline />
            <Rotas />
        </MuiThemeProvider>,
    document.getElementById("root")
);
