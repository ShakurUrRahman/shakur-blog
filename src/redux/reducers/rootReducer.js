import { combineReducers } from 'redux';
import { blogReducer } from './blogReducer';
import { tagReducer } from './tagReducer';

const rootReducer = combineReducers({
    blogs: blogReducer,
    filter: tagReducer
});

export default rootReducer;