import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import NewPage from './components/pages/Checkout';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/checkout" element={<NewPage/>} />
    </Routes>
  );
};

export default App;
