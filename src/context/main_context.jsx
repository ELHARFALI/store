import { useReducer, useContext, createContext, useEffect } from "react";
import { customFetch } from "../utils";

import reducer from '../reducer/main_reducer'



const MainContext = createContext()

const initialState = {
    isLoading: false,
    featuredProducts: [],
    all_products: [],
    meta: [],
    page_number: 2,
}

export const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)



    // fetch featured products
    const fetchFeaturedProducts = async (url) => {
        try {
            const response = await customFetch(url)
            const data = response.data.data
            dispatch({type: 'FEATURED_PRODUCTS', payload: {data}})
        } catch (error) {
            console.log(error);
        }
    }

    // fetch all products
    const fetchAllProducts = async (url) => {
        try {
            const response = await customFetch(url)
            const data = response.data.data
            const meta = response.data.meta
            dispatch({type: 'FETCH_ALL_PRODUCTS', payload: {data}})
            dispatch({type: 'FETCH_META', payload: {meta}})
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        fetchFeaturedProducts('/products?featured=true')
        fetchAllProducts('/products')
    }, [])
    
    
    return (
        <MainContext.Provider value={{...state}}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    return useContext(MainContext)
}