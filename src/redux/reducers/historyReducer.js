import { ADD_TO_HISTORY } from "../actionTypes/actionTypes";

const initialState = {
    history: [],
};

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            if (!state.history.includes(action.payload)) {
                return {
                    ...state,
                    history: [...state.history, action.payload]
                };
            } else {
                return {
                    ...state,
                    history: state.history.filter((blog) => blog !== action.payload)
                };
            }
        default:
            return state;
    }
};

