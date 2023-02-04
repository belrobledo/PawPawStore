import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CheckoutContainer from './components/CheckoutContainer/CheckoutContainer';
import OrderContainer from './components/OrderContainer.jsx/OrderContainer';

import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';

import { CartProvider } from './storage/cartContext';



function App() {
  return (
    <>
      <ToastContainer autoClose={2000} hideProgressBar/>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={ <LandingPage/> } />
            <Route path="/category/:categoryid" element={ <ItemListContainer/> } />
            <Route path="/search/:searchid" element={ <ItemListContainer/> } />
            <Route path="/detail/:id" element={ <ItemDetailContainer/> } />
            <Route path="/checkout" element={ <CheckoutContainer/> } />
            <Route path="/order/:orderid" element={ <OrderContainer/> } />
            <Route path="*" element={ <ErrorPage/> } />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
