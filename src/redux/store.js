import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers/rootReducer';
import historyCounter from './middlewares/historyCounter';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(historyCounter, thunk))
);

export default store;