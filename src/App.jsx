
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Barra from "./components/navbar/Barra";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Barra/>}/>
    <Route  path="/cart" element={<div> hola </div>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
