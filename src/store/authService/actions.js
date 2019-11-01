import * as types from './types';

export function usuarioAutenticado(usuario, dispatch) {
  dispatch({ type: types.USUARIO_AUTENTICADO, payload: usuario });
}

export function logOut(params = {}, dispatch) {
  dispatch({ type: types.USUARIO_LOGOUT });
}
