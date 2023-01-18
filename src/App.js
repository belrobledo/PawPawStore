import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';

import { CartProvider } from './storage/cartContext';


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={ <LandingPage/> } />
            <Route path="/detail/:id" element={ <ItemDetailContainer/> } />
            <Route path="/category/:categoryid" element={ <ItemListContainer/> } />
            <Route path="*" element={ <ErrorPage/> } />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
