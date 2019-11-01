import React, { createContext, useContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { rootInitialState, rootReducer } from './rootReducer';
import getRootActions from './rootActions';

export const State = createContext();
export const Dispatch = createContext();
export const Actions = createContext();

export const useStore = () => {
  const state = useContext(State);
  return state;
};

export const useActions = () => {
  const actions = useContext(Actions);
  return actions;
};

export const useDispatch = () => {
  const dispatch = useContext(Dispatch);
  return dispatch;
};

StoreProvider.propTypes = {
  children: PropTypes.object,
};
function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);
  const actions = useMemo(() => getRootActions(dispatch), []);

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>
        <Actions.Provider value={actions}>{children}</Actions.Provider>
      </Dispatch.Provider>
    </State.Provider>
  );
}

export default StoreProvider;
