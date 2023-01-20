

import {  legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import {sareeReducer} from "./WomensProducts/saree.reducer"



const rootReducer =combineReducers({sareeReducer})

export const store =legacy_createStore(rootReducer, applyMiddleware(thunk))

//  import {  legacy_createStore } from "redux";
// mport thunk from "redux-thunk";
//  import {combineReducers} from "redux"

//  const rootReducer =combineReducers({})
//  export const store =legacy_createStore()

