/** Initial states */
import {SET_HOLE_CODE, SET_MATCH_DATA} from "./actions";

const appStates = {
    holeCode: '',
    matchData: []
}

/** reducers */
const appReducer = (state=appStates, action) => {
    const { type, payload } = action || {}
    switch (type) {
        case SET_HOLE_CODE:
            return { ...state, holeCode: payload }
        case SET_MATCH_DATA:
            return { ...state, matchData: payload}
        default:
            return state
    }
}

export default appReducer