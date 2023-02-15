import { ADD_TO_HISTORY } from "../actionTypes/actionTypes";

const historyCounter = (store) => (next) => (action) => {
    const state = store.getState();

    const blogs = state.blogs.history;
    console.log(blogs);

    if (action.type === ADD_TO_HISTORY) {
        const newAction = {
            ...action,
            payload: { ...action.payload, historyPosition: blogs.length }
        };
        return next(newAction);
    }
    return next(action);
}

export default historyCounter;