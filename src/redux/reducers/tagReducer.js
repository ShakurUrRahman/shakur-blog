import { LATEST_UPLOAD, OLDEST_UPLOAD, TOGGLE_NAVBAR, TOGGLE_TAGS } from "../actionTypes/actionTypes";

export const initialState = {
    tags: [],
    latest: true,
    oldest: false,
    expandNavbar: false
};

export const tagReducer = (state = initialState, action) => {
    switch (action.type) {
        case LATEST_UPLOAD:
            return {
                ...state,
                latest: !state.latest,
                oldest: !state.oldest,
            };
        case OLDEST_UPLOAD:
            return {
                ...state,
                latest: !state.latest,
                oldest: !state.oldest,
            };
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
            };
        case TOGGLE_NAVBAR:
            return {
                ...state,
                expandNavbar: !state.expandNavbar,
            };
        default:
            return state;
    }
};