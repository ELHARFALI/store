import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MainContextProvider } from './context/main_context.jsx'
import { SingleProductProvider } from './context/singleProduct_context.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MainContextProvider>
    <SingleProductProvider>
        <App />
    </SingleProductProvider>
    <ToastContainer
      position="top-center"
      autoClose={3000} />
  </MainContextProvider>,
)
