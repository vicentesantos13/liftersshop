import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import NewPage from './components/pages/Checkout';
import ProductDetail from './components/pages/ProductDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/checkout" element={<NewPage/>} />
      <Route path='/product/:id' element={<ProductDetail />} />
    </Routes>
  );
};

export default App;
