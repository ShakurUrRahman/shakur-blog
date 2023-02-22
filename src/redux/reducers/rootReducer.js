import { combineReducers } from 'redux';
import { blogReducer } from './blogReducer';
import { tagReducer } from './tagReducer';

const rootReducer = combineReducers({
    blogs: blogReducer,
    filters: tagReducer
});

export default rootReducer;