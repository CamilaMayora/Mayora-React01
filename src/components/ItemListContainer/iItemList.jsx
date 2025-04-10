
import { Link } from "react-router-dom";
import styles from './ItemList.module.css'



const ItemList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p className={styles.carga}>
      cargando...</p>;
  }
  return (
    <div className={styles.cardcontainer}>
      {products.map((product) => (
        <Link to={`/item/${product.id}`} key={product.id}>
          <div className={styles.card}>
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.price}>
              <strong>${product.price}</strong>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};


export default ItemList
