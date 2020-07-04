export default (state, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [action.payload, ...state.products]
            }
        case 'ADD_PRODUCT_TO_CART':
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        case 'ADD_PRODUCT_QUANTITY':
            state.cart[state.cart.findIndex(cartItem => cartItem.id === action.payload)].quantity++
            return {
                ...state,
                cart: [...state.cart]
            }
        case 'REMOVE_PRODUCT_QUANTITY':
            state.cart[state.cart.findIndex(cartItem => cartItem.id === action.payload)].quantity--
            return {
                ...state,
                cart: [...state.cart]
            }
        default:
            return state
    }
}