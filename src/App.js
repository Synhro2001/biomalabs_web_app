import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/Navbar/Navbar'
import Contacts from './components/pages/Contacts';
import AboutUs from './components/pages/AboutUs';
import ProductVerification from './components/pages/ProductVerification';
import ProductsPage from './components/pages/ProductsPage';
import Mission from './components/pages/Mission';
import Production from './components/pages/Production';
import QualityStandarts from './components/pages/QualityStandarts';

import './App.css'

function App() {
  return (
    <>
      <Router>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product-verification" element={<ProductVerification/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/mission" element={<Mission/>}/>
          <Route path="/production" element={<Production/>}/>
          <Route path="/quality-standarts" element={<QualityStandarts/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
