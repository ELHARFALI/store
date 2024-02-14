
const main_reducer = (state, action) => {


    // FEATURED PRODUCTS
    if (action.type === 'FEATURED_PRODUCTS') {
        const {data} = action.payload
        return {...state, featuredProducts: data}
    }

    // ALL PRODUCTS
    if (action.type === 'FETCH_ALL_PRODUCTS') {
        const {data} = action.payload
        return {...state, all_products: data}
    }
    if (action.type === 'FETCH_META') {
        const {meta} = action.payload
        return {...state, meta: meta}
    }

    return {...state}
}

export default main_reducer