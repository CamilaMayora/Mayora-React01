import styles from "./ItemDetail.module.css";

const ItemDetail = ({ producto }) => {
  if (!producto) {
    return <p
    className={styles.title}>
        cargando...</p>;
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{producto.title}</h2>
      <p className={styles.description}>{producto.description}</p>
      <p className={styles.price}><strong>${producto.price}</strong></p>
    </div>
  );
};

export default ItemDetail;
