import { useContext, createContext, useReducer } from "react";
import reducer from '../reducer/singleProduct_reducer'
import { toast } from 'react-toastify';

const SingleProductContext = createContext()

const initialState = {
    cartProduct: [],
    cartAmount: 0,
    subtotal: 0,
    shipping: 500,
    tax: 3900,
    orderTotal: 0,
}


export const SingleProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addProduct = (id,title, image, amount, price, company, color) => {
        
        if (!color) {
            return toast.error('Please choose a color')
        } 
        dispatch({ type: 'ADD_PRODUCT', payload: { id, title, image, amount, price, company, color } })
        toast.success('Item added to cart!')
        
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