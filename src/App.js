import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/HeaderComponent';
import Footer from './components/Footer/FooterComponent';
import ProductInfo from './components/ProductInfo/ProductInfoComponent';
import Home from './components/Home/HomeComponent';
import Cart from './components/Cart/CartComponent';

function App() {
  

  return (
    <BrowserRouter>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={ProductInfo} exact />
        <Route path="/cart/:id?" component={Cart} />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
