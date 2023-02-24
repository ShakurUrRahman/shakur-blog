import { ADD_TO_HISTORY } from "../actionTypes/actionTypes";

const historyCounter = (store) => (next) => (action) => {
    // const state = store.getState();
    // const blogs = state.blogs.history;
    // console.log(blogs);
    const newDate = new Date();
    const date = newDate.getTime();
    if (action.type === ADD_TO_HISTORY) {
        const newAction = {
            ...action,
            payload: { ...action.payload, historyPosition: date }
        };
        return next(newAction);
    }
    return next(action);
}

export default historyCounter;