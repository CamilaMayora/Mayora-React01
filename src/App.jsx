
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Barra from "./components/navbar/Barra";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <>
    <BrowserRouter>
    <Barra/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
   </>
)
}

export default App
