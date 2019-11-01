import React from 'react';
import ReactDOM from 'react-dom';
import Rotas from "./infraestrutura/rotas";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import tema from "./estilos/tema";
import StoreProvider from './store';

ReactDOM.render(
    <StoreProvider>
        <MuiThemeProvider theme={tema}>
            <CssBaseline />
            <Rotas />
        </MuiThemeProvider>
    </StoreProvider>,
    document.getElementById("root")
);
