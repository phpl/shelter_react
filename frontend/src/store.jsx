import { applyMiddleware, createStore } from "redux"
import reducer from "./reducers"
import {createLogger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const middleware = applyMiddleware(createLogger(), thunk)
const devTools = composeWithDevTools(middleware)
export default createStore(reducer, devTools)
