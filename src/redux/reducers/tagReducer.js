import { TOGGLE_TAGS } from "../actionTypes/actionTypes";

export const initialState = {
    tags: [],
};

export const tagReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TAGS:
            if (state.tags.includes(action.payload)) {
                return {
                    ...state,
                    tags: state.tags.filter((tag) => tag !== action.payload)

                }
            } else {
                return {
                    ...state,
                    tags: [...state.tags, action.payload]
                }
            }
        default:
            return state;
    }
};