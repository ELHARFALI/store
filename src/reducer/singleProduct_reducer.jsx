
const singleProduct_reducer = (state, action) => {
    if (action.type === 'ADD_PRODUCT') {
        const { id, title, amount, price, company, color } = action.payload
        return {...state, single_product: [...state.single_product, [{id, title, amount, price, company, color}]], cartAmount: state.single_product.length + 1}
    }
    return {...state}
}

export default singleProduct_reducer