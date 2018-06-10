import { applyMiddleware, createStore } from "redux"
import reducer from "./reducers"
import {createLogger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


const middleware = applyMiddleware(createLogger())
const devTools = composeWithDevTools(middleware)
export default createStore(reducer, devTools)
