import { TOGGLE_TAGS } from "../actionTypes/actionTypes"

export const toggleTags = (data) => {
    return {
        type: TOGGLE_TAGS,
        payload: data
    }
}