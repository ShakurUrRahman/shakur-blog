import { LATEST_UPLOAD, OLDEST_UPLOAD, TOGGLE_TAGS } from "../actionTypes/actionTypes"

export const toggleTags = (data) => {
    return {
        type: TOGGLE_TAGS,
        payload: data
    }
}

export const toggleLatest = () => {
    return {
        type: LATEST_UPLOAD,
    }
}

export const toggleOldest = () => {
    return {
        type: OLDEST_UPLOAD
    }
}