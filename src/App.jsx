import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Services } from './pages/Services/Services';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Contact } from './pages/Contact/Contact';
import { Products } from './pages/Products/Products';

//import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
