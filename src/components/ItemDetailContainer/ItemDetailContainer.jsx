import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"; 
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState(null)

    useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(json => setProducto(json))
        .catch(error => console.log("Error al cargar el producto:", error))
    }, [id])

  
    return (
        <ItemDetail producto={producto} />
    );
  };
  
  export default ItemDetailContainer;