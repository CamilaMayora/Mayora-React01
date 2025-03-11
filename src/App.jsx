
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Barra from "./components/navbar/Barra";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <>
    <BrowserRouter>
    <Barra/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    </Routes>
    </BrowserRouter>
   </>
)
}

export default App
