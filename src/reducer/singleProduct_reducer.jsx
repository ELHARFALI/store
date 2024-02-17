
const singleProduct_reducer = (state, action) => {
    if (action.type === 'ADD_PRODUCT') {
        const { id, title, image, amount, price, company, color } = action.payload
        return {...state, cartProduct: [...state.cartProduct, {id, title, image, amount, price, company, color}], cartAmount: state.cartProduct.length + 1}
    }
    return {...state}
}

export default singleProduct_reducer