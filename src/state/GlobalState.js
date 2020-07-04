import React, {createContext, useReducer} from 'react'

import AppReducers from '../state/AppReducers'


let initialState = {
    products: [
        {
            id: 1,
            name: 'first product',
            desc: 'uniqure bags ',
            price: 2500,
            quantity: 1,
            url: 'https://cdn.vox-cdn.com/thumbor/XIOXcg3rqbEhsH5sCCa6cdWzSGA=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66466946/awhite_20200304_3926_0020.0.jpg'
        },
        {
            id: 2,
            name: 'shoes',
            desc: 'leather shoes',
            price: 4500,
            quantity: 1,
            url: 'https://www.church-footwear.com/content/dam/churchs_products/E/EEG/EEG018/9ACEF0ABK/EEG018_9ACE_F0ABK_F_000000_SLS.png'
        },
        {
            id: 3,
            name: 'wallet',
            desc: 'wallet from the products',
            price: 500,
            quantity: 1,
            url: 'https://image.made-in-china.com/202f0j00aztRkTsrmSoE/New-Model-Design-Purses-Brand-Women-s-Short-Wallet-Men-Wallet.jpg'
        },
        {
            id: 4,
            name: 'hand bag',
            desc: 'ladies unique hand bag',
            price: 5500,
            quantity: 0,
            url: 'https://www.church-footwear.com/content/dam/churchs_products/E/EEG/EEG018/9ACEF0ABK/EEG018_9ACE_F0ABK_F_000000_SLS.png'
        },
        {
            id: 5,
            name: 'shoes',
            desc: 'leather shoes',
            price: 4500,
            quantity: 0,
            url: 'https://www.church-footwear.com/content/dam/churchs_products/E/EEG/EEG018/9ACEF0ABK/EEG018_9ACE_F0ABK_F_000000_SLS.png'
        },
        {
            id: 6,
            name: 'Laptop',
            desc: 'Laptop description here',
            price: 50000,
            quantity: 0,
            url: 'https://cdn.techjuice.pk/wp-content/uploads/2017/03/windows-10-laptop.jpg'
        },
        {
            id: 11,
            name: 'first product',
            desc: 'uniqure bags ',
            price: 2500,
            quantity: 0,
            url: 'https://cdn.vox-cdn.com/thumbor/XIOXcg3rqbEhsH5sCCa6cdWzSGA=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66466946/awhite_20200304_3926_0020.0.jpg'
        },
        {
            id: 12,
            name: 'shoes',
            desc: 'leather shoes',
            price: 4500,
            quantity: 0,
            url: 'https://www.church-footwear.com/content/dam/churchs_products/E/EEG/EEG018/9ACEF0ABK/EEG018_9ACE_F0ABK_F_000000_SLS.png'
        },
        {
            id: 13,
            name: 'wallet',
            desc: 'wallet from the products',
            price: 500,
            quantity: 0,
            url: 'https://image.made-in-china.com/202f0j00aztRkTsrmSoE/New-Model-Design-Purses-Brand-Women-s-Short-Wallet-Men-Wallet.jpg'
        },
    ],
    cart: [
        {
            id: 12,
            name: 'shoes',
            desc: 'leather shoes',
            price: 4500,
            quantity: 0,
            url: 'https://www.church-footwear.com/content/dam/churchs_products/E/EEG/EEG018/9ACEF0ABK/EEG018_9ACE_F0ABK_F_000000_SLS.png'
        },
        {
            id: 13,
            name: 'wallet',
            desc: 'wallet from the products',
            price: 500,
            quantity: 0,
            url: 'https://image.made-in-china.com/202f0j00aztRkTsrmSoE/New-Model-Design-Purses-Brand-Women-s-Short-Wallet-Men-Wallet.jpg'
        }
    ],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducers, initialState);

    function addProd(product){
        dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        });
    }

    function addToCardFunction(product){
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: product
        });
    }

    function addProductQuantity(productId){
        dispatch({
            type: 'ADD_PRODUCT_QUANTITY',
            payload: productId
        })
    }

    function removeProductQuantity(productId){
        dispatch({
            type: 'REMOVE_PRODUCT_QUANTITY',
            payload: productId
        })
    }

    return (<GlobalContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                addProd,
                addToCardFunction,
                addProductQuantity,
                removeProductQuantity,
            }}>
            {children}
        </GlobalContext.Provider>)
}
