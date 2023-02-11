import { TOGGLE_TAGS } from "../actionTypes/actionTypes";

export const initialState = {
    filter: {
        tags: false
    }
};

export const tagReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TAGS:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    tags: [...state.filter.tags, action.payload]
                }
            };
        default:
            return state;
    }
};