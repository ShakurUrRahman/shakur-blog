import { ADD_BLOG, ADD_TO_HISTORY, DELETE_BLOG, LOAD_BLOG, REMOVE_BLOG } from "../actionTypes/actionTypes"

export const loadBlog = (data) => {
    return {
        type: LOAD_BLOG,
        payload: data
    };
}

export const addBlog = (data) => {
    return {
        type: ADD_BLOG,
        payload: data
    };
}
export const deleteBlog = (id) => {
    return {
        type: DELETE_BLOG,
        payload: id
    };
}

export const addToHistory = (blog) => {
    return {
        type: ADD_TO_HISTORY,
        payload: blog
    };
}