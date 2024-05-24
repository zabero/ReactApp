import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Home } from './pages/home.jsx';
import { Booking } from './pages/booking.jsx';
import { Kontakt } from './pages/kontakt.jsx';
import { Galeria } from './pages/galeria.jsx';
import { Masaze_klasyczny } from './pages/masaze/klasyczny.jsx';
import { Footer } from './component/footer/footer.jsx';
import { Container } from 'react-bootstrap';
import Voucher from './pages/voucher.jsx';
import Cart from './pages/cart.jsx';
import Menu from '../src/component/menu/Menu';
import { NotFound } from './pages/404.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <BrowserRouter>
        <Menu cartItems={cartItems} />
        <Container className='routing-container d-flex align-items-center justify-content-center'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/booking' element={<Booking />} />
            <Route
              path='/vouchery'
              element={<Voucher addToCart={addToCart} />}
            />
            <Route path='/kontakt' element={<Kontakt />} />
            <Route path='/galeria' element={<Galeria />} />
            <Route path='/klasyczny' element={<Masaze_klasyczny />} />
            <Route
              path='/koszyk'
              element={
                <Cart
                  items={cartItems}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
