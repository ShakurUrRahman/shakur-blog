import { ADD_CONTENT, ADD_TO_HISTORY, BLOG_PER_PAGE, CURRENT_PAGE, DELETE_CONTENT, GET_CONTENT, LOADING, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    history: []
};

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                blogs: action.payload
            };
        case ADD_CONTENT:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            };
        case DELETE_CONTENT:
            return {
                ...state,
                blogs: state.blogs.filter((blog) => blog._id !== action.payload)
            };
        case UPDATE_CONTENT:
            return {
                ...state,
                blogs: state.blogs.filter((blog) => blog._id !== action.payload)
            };
        case ADD_TO_HISTORY:
            const newHistory = state.history.filter(
                (blog) => blog._id !== action.payload._id
            );
            return {
                ...state,
                history: [...newHistory, action.payload]
            };
        default:
            return state;
    }
};

