import combineStores from './combineStores';
import * as authService from './authService/reducer';

const combinedStore = combineStores({
  authService,
});

const { rootInitialState, rootReducer } = combinedStore;

export { rootInitialState, rootReducer };
