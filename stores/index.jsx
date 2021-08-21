import React from 'react'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import axios from 'axios'

import KanyeReducer from './kanye'

export * from './kanye/action'

const composeEnhancers = window.__REACT_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose

export const kanyeAxios = axios.create({
    baseURL: 'https://api.kanye.rest/',
})

const allReducers = combineReducers({
    KanyeReducer
})

export default ReduxStore = (props) => {
    

    const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)))

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}
