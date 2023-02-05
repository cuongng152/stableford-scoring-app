/** actions types */
export const SET_HOLE_CODE = 'SET_HOLE_CODE'
export const SET_MATCH_DATA = 'SET_MATCH_DATA'

/** actions */
export const setHoleCode = (payload) => ({ type: SET_HOLE_CODE, payload })
export const setMatchData = (payload) => ({type: SET_MATCH_DATA, payload })