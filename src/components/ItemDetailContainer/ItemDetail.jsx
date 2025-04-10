import { useContext, useState } from "react";
import styles from "./ItemDetail.module.css";
import { ShopContext } from "../../context/ShopContext";
import Botones from "../item/item";


const ItemDetail = ({ producto }) => {
  const [contador, setContador] = useState(1)
  const {AgregarAlCarrito} = useContext(ShopContext)
  if (!producto) {
    return <p
    className={styles.carga}>
        cargando...</p>;
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{producto.title}</h2>
      <p className={styles.description}>{producto.description}</p>
      <p className={styles.price}><strong>${producto.price}</strong></p>
      <div className={styles.controles}>
      <Botones contador={contador} setContador={setContador} />
</div>

<button 
  onClick={() => AgregarAlCarrito(producto, contador)}
  className={styles.agregar}
>
  Agregar Al Carrito
</button>
    </div>
  );
};

export default ItemDetail;