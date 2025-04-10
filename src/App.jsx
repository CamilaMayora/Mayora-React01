
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Barra from "./components/navbar/Barra";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ShopComponentContext from './context/ShopContext';
import Categorias from './components/pages/Categorias';
import Cart from './components/cart/Cart';



function App() {

  return (
    <>
    <ShopComponentContext>
    <BrowserRouter>
    <Barra/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path="/cursos" element={<Categorias />} />
    <Route path='item/:id' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </ShopComponentContext>
   </>
)
}

export default App
