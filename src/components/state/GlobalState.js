import React, {createContext, useReducer} from 'react'

import AppReducer from './AppReducers'


let initialState = {
    products: [],
    cart: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider
            value={{
                products: state.products,
                cart: state.cart
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}