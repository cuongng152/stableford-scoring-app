/** Initial states */
import {SET_HOLE_CODE} from "./actions";

const appStates = {
    holeCode: ''
}

/** reducers */
const appReducer = (state=appStates, action) => {
    const { type, payload } = action || {}
    switch (type) {
        case SET_HOLE_CODE:
            return { ...state, holeCode: payload }
        default:
            return state
    }
}

export default appReducer