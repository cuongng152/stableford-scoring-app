import appReducer from "./redux";
import {combineReducers, createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({
    appReducer: appReducer()
})

const store = createStore(reducer, composeWithDevTools())
export default store