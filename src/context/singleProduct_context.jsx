import { useContext, createContext, useReducer } from "react";
import reducer from '../reducer/singleProduct_reducer'

const SingleProductContext = createContext()

const initialState = {
    single_product: [],
    cartAmount: 0
}


export const SingleProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addProduct = (id,title, amount, price, company, color) => {
        dispatch({type: 'ADD_PRODUCT', payload: {id,title, amount, price, company, color}})
    }

    
    
    return (
        <SingleProductContext.Provider value={{...state, addProduct}}>
            {children}
        </SingleProductContext.Provider>
    )
}


export const useSingleProductContext = () => {
    return useContext(SingleProductContext)
}