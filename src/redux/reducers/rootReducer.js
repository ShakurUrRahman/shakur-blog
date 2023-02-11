import { combineReducers } from 'redux';
import { historyReducer } from './historyReducer';
import { tagReducer } from './tagReducer';

const rootReducer = combineReducers({
    history: historyReducer,
    tag: tagReducer
});

export default rootReducer;