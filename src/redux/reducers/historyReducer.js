import { ADD_TO_HISTORY } from "../actionTypes/actionTypes";

const initialState = {
    history: [],
};

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload]
            };
        default:
            return state;
    }
};
