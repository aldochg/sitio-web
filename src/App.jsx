import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Blocks } from './pages/Blocks/Blocks';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Contact } from './pages/Contact/Contact';
import { Products } from './pages/Products/Products';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CardShopping } from './pages/Cart/CardShoping';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        {/* Rutas que incluyen Header y Footer */}
        <Route path="/" element={<><Header/><Home/><Footer/></>} />
        <Route path="/products" element={<><Header/><Products/><Footer/></>} />
        <Route path="/blocks" element={<><Header/><Blocks/><Footer/></>} />
        <Route path="/about-us" element={<><Header/><AboutUs/><Footer/></>} />
        <Route path="/contact" element={<><Header/><Contact/><Footer/></>} />

        {/* Ruta de CardShoping sin Header ni Footer */}
        <Route path="/cart" element={<CardShopping />} />
      </Routes>
    </div>
  );
};

export default App;
