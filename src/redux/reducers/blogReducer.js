import { ADD_BLOG, ADD_TO_HISTORY, DELETE_BLOG, LOAD_BLOG } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    history: []
};

export const blogReducer = (state = initialState, action) => {
    const selectedBlog = state.blogs.find((blog) => blog._id === action.payload._id);
    // console.log("r", selectedBlog);
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
            if (selectedBlog) {
                const newCart = state.history.filter(
                    (product) => product._id !== selectedBlog._id
                );
                return {
                    ...state,
                    history: [...newCart, selectedBlog]
                };
            }
            return {
                ...state,
                history: [...state.history, selectedBlog]
            };
        default:
            return state;
    }
};

