import { TOGGLE_TAGS } from "../actionTypes/actionTypes"

export const toggleTags = (tagName) => {
    return {
        type: TOGGLE_TAGS,
        payload: tagName
    }
}