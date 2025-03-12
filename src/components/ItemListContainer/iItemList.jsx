
import { Link } from "react-router-dom";
import styles from './ItemList.module.css'



const ItemList = ({ productos }) => {
    return (
      <div className={styles.cardcontainer}>

        {productos.map((producto) => (

          <Link to={`/item/${producto.id}`} key={producto.id}>
            <div className={styles.card}>
            <h3 className={styles.title}>{producto.title}</h3> 
            <p className={styles.price}><strong>${producto.price}</strong></p>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  


export default ItemList;
