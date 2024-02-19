import { useContext, createContext, useReducer } from "react";
import reducer from '../reducer/singleProduct_reducer'
import { toast } from 'react-toastify';

const SingleProductContext = createContext()

const initialState = {
    cartProducts: [],
    cartAmount: 0,
    subtotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
}


export const SingleProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addProduct = (id,title, image, amount, price, company, color) => {

        const cartProduct = {
            cartID: id + color,
            productID: id,
            image,
            title,
            company,
            color,
            price,
            amount,
        }
        
        if (!color) {
            return toast.error('Please choose a color')
        } 
        dispatch({ type: 'ADD_PRODUCT', payload: { cartProduct } })
        toast.success('Item added to cart!')
        
    }

    const removeItem = (cartID) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { cartID } })
        toast.error('Item remove from the cart!')
    }


    
    
    return (
        <SingleProductContext.Provider value={{...state, addProduct, removeItem}}>
            {children}
        </SingleProductContext.Provider>
    )
}


export const useSingleProductContext = () => {
    return useContext(SingleProductContext)
}