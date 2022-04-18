import { createStore, compose} from 'redux';

import rootReducers from './reducers';

declare global {
    interface Window {
      REDUX_DEVTOOLS_EXTENSION_COMPOSE?: typeof compose;
    }
  }
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    rootReducers,
    composeEnhancers()
    )

export default store;