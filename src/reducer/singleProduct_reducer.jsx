
const singleProduct_reducer = (state, action) => {


    if (action.type === 'ADD_PRODUCT') {
        const { cartProduct } = action.payload
        const item = state.cartProducts.find((i) => i.cartID === cartProduct.cartID)
        
        if (item) {
            item.amount += cartProduct.amount
            return {...state, cartProducts: [...state.cartProducts], subtotal: state.subtotal += cartProduct.price * cartProduct.amount, tax: state.tax = 0.1 * state.subtotal, orderTotal: state.subtotal + state.shipping + state.tax, cartAmount: state.cartProducts.length + 1}
        }
        return {...state, cartProducts: [...state.cartProducts, cartProduct], cartAmount: state.cartProducts.length + 1, subtotal: state.subtotal += cartProduct.price * cartProduct.amount, tax: state.tax = 0.1 * state.subtotal, orderTotal: state.subtotal + state.shipping + state.tax}
    }

    if (action.type === 'REMOVE_ITEM') {
        const { cartID } = action.payload
        const product = state.cartProducts.find((i) => i.cartID === cartID)
        const newProducts = state.cartProducts.filter((i) => i.cartID !== cartID)
        return { ...state, cartProducts: newProducts, cartAmount: state.cartProducts.length - 1, orderTotal: state.orderTotal -= product.price * product.amount, subtotal: state.subtotal -= product.price * product.amount, tax: state.tax = 0.1 * state.subtotal, }
    }    

    const clearCart = () => {
        return null
    }
        
    return {...state}
}

export default singleProduct_reducer