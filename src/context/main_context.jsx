import { useReducer, useContext, createContext, useEffect } from "react";
import { customFetch } from "../utils";

import reducer from '../reducer/main_reducer'



const MainContext = createContext()

const initialState = {
    isLoading: false,
    featuredProducts: []
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

    useEffect(() => {
        fetchFeaturedProducts('/products?featured=true')
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