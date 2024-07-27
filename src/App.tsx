import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path='/product/:id' element={<ProductDetail />} />
    </Routes>
  );
};

export default App;
