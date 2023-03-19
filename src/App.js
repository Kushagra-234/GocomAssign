
import React from 'react'
import ProductList from './components/productlist/ProductList'
import ProductDetails from './components/productdetails/ProductDetails'
import Wishlist from './components/wishlist/Wishlist'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import "./App.css"


const App = () => {
 
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="/wish" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App