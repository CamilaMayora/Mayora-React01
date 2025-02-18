
import './App.css';
import Barra from "./components/navbar/Barra";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
    <Barra/>
    <ItemListContainer mensaje={"Prueba1"}/>
    <ItemListContainer mensaje={"Prueba2"}/>
    <ItemListContainer mensaje={"Prueba3"}/>
    
    </>
  )
}

export default App
