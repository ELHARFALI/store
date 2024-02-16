
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
    if (action.type === 'ALL_PRODUCTS_IS_LOADING') {
        return {...state, isLoading: true}
    }
    if (action.type === 'ALL_PRODUCTS_IS_LOADING_SUCCESSFUL') {
        return {...state, isLoading: false}
    }

    // SINGLE PRODUCT
    if (action.type === 'FETCH_SINGLE_PRODUCT') {
        const { data } = action.payload
        return {...state, single_product: data}
    }

    if (action.type === 'SINGLE_PRODUCT_IS_LOADING') {
        return {...state, isLoading: true}
    }
    if (action.type === 'SINGLE_PRODUCT_LOADING_IS_DONE') {
        return {...state, isLoading: false}
    }

    return {...state}
}

export default main_reducer