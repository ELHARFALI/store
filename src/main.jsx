import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MainContextProvider } from './context/main_context.jsx'
import { SingleProductProvider } from './context/singleProduct_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MainContextProvider>
    <SingleProductProvider>
      <App />
    </SingleProductProvider>
  </MainContextProvider>,
)
