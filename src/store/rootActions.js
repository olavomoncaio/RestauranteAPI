import * as authServiceActions from './authService/actions';

const bindDispatchToActions = (actions, dispatch) => {
  const mappedActions = {};
  return mappedActions;
};
function getRootActions(dispatch) {
  return {
    authService: bindDispatchToActions(authServiceActions, dispatch),
  };
}
export default getRootActions;
