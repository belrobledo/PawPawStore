import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { CartProvider } from './storage/cartContext';


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/detail/:id" element={ <ItemDetailContainer/> } />
            <Route path="/category/:categoryid" element={ <ItemListContainer/> } />
            <Route path="*" element={ <NotFound/> } />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
