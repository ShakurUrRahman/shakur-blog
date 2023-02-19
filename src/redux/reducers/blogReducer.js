import { ADD_CONTENT, ADD_TO_HISTORY, DELETE_CONTENT, GET_CONTENT, SEND_FILTER } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    history: []
};

export const blogReducer = (state = initialState, action) => {
    const selectedBlog = state.blogs.find((blog) => blog._id === action.payload._id);
    // console.log("r", selectedBlog);
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
        case ADD_TO_HISTORY:
            if (selectedBlog) {
                const newHistory = state.history.filter(
                    (product) => product._id !== selectedBlog._id
                );
                return {
                    ...state,
                    history: [...newHistory, selectedBlog]
                };
            }
            return {
                ...state,
                history: [...state.history, selectedBlog]
            };
        // case SEND_FILTER:
        //     const blogList = state.blogs;
        //     const { t } = action.payload;
        //     let x = [];
        //     x = blogList.tag.filter(blog => console.log(blog))

        //     return {
        //         ...state
        //     }
        default:
            return state;
    }
};

