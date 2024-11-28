import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Perbaikan import
import './App.css';
import Home from './pages/Home';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from './components/Footer';
import Electronics from './pages/Electronics';
import Pants from './pages/Pants';
import Pakaian from './pages/Pakaian';
import Makeup from './pages/Makeup';
import Cart from "./pages/Cart";
import DetailElectronics from './pages/DetailElectronics';
import DetailPakaian from './pages/DetailPakaian';
import DetailCelana from './pages/DetailCelana';
import DetailMakeup from './pages/DetailMakeup';
import About from './pages/About';
import Akun from './pages/Akun';
import OrderHistory from './pages/OrderHistory';
import Settings from './pages/Settings';

const App = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} cart={cart} setCart={setCart} />} />
        <Route path="/electronics" element={<Electronics addToCart={addToCart} cart={cart} setCart={setCart} />} />
        <Route path="/electronics/:id" element={<DetailElectronics addToCart={addToCart} cart={cart} setCart={setCart} />} />
        <Route path="/celana" element={<Pants addToCart={addToCart} cart={cart} setCart={setCart} />} />
        <Route path="/celana/:id" element={<DetailCelana addToCart={addToCart} cart={cart} setCart={setCart} />} />
        <Route path="/pakaian" element={<Pakaian addToCart={addToCart} cart={cart} setCart={setCart} />} />
        <Route path="/pakaian/:id" element={<DetailPakaian addToCart={addToCart} cart={cart} setCart={setCart} />} />
        <Route path="/makeup" element={<Makeup addToCart={addToCart} cart={cart} setCart={setCart} />} />
        <Route path="/makeup/:id" element={<DetailMakeup addToCart={addToCart} cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/history" element={<OrderHistory />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
