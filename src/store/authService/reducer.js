import * as types from './types';

export const initialState = {
  carregandoSessao: false,
  usuarioAutenticado: null,
  conectado: false,
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.USUARIO_AUTENTICADO:
      return {
        ...state,
        carregandoSessao: false,
        usuarioAutenticado: action.usuario,
        conectado: action.usuario != null,
      };
    case types.USUARIO_LOGOUT:
      return {
        ...state,
        usuarioAutenticado: null,
        conectado: false,
      };
    default:
      return state;
  }
};
