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
                cart: state.products.find(product => product.id === action.payload)
            }
        default:
            return state
    }
}