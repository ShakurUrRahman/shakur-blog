import { ADD_BLOG, ADD_TO_HISTORY, DELETE_BLOG, LOAD_BLOG, REMOVE_BLOG } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
};

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BLOG:
            return {
                ...state,
                blogs: action.payload
            };
        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            };
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter((blog) => blog._id !== action.payload)
            };
        case ADD_TO_HISTORY:
            if (!state.blogs.includes(action.payload)) {
                return {
                    ...state,
                    blogs: [...state.blogs, action.payload]
                };
            } else {
                return {
                    ...state,
                    blogs: state.blogs.filter((blog) => blog !== action.payload)
                };
            }
        default:
            return state;
    }
};

