
const main_reducer = (state, action) => {


    // FEATURED PRODUCTS
    if (action.type === 'FEATURED_PRODUCTS') {
        const {data} = action.payload
        return {...state, featuredProducts: data}
    }

    return {...state}
}

export default main_reducer