import { ADD_TO_HISTORY } from "../actionTypes/actionTypes"

export const addToHistory = (history) => {
    return {
        type: ADD_TO_HISTORY,
        payload: history
    }
}