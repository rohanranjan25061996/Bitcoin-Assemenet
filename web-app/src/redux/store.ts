import {combineReducers, createStore, compose, applyMiddleware} from "redux"
import {reducers} from "./reducer"

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers( { 
    bitcoin: reducers
 } )

const customMiddleWare = (store : any) => (next : any) => (action : any) =>{

    return typeof action === "function" ? action(store.dispatch, store.getState) : next(action);
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enchancer = composeEnhancers(applyMiddleware(customMiddleWare))

export const store = createStore( rootReducer, enchancer )

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch