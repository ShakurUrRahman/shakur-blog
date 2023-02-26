import { ADD_CONTENT, ADD_TO_HISTORY, DELETE_CONTENT, GET_CONTENT, LOADING, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const loadBlog = (data) => {
    return {
        type: GET_CONTENT,
        payload: data
    };
}

export const addBlog = (data) => {
    return {
        type: ADD_CONTENT,
        payload: data
    };
}
export const deleteBlog = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
    };
}

export const updatedBlog = (id) => {
    return {
        type: UPDATE_CONTENT,
        payload: id
    };
}

export const addToHistory = (blog) => {
    return {
        type: ADD_TO_HISTORY,
        payload: blog
    };
}

export const isLoadingAction = () => {
    return {
        type: LOADING,
    }
}