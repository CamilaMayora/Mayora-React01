import styles from './Item.Module.css'


const Botones = ({ contador, setContador, min = 1, max = 99 }) => {
    const restar = () => {
    if (contador > min) {
        setContador(contador - 1);
    }
    };

    const sumar = () => {
    if (contador < max) {
        setContador(contador + 1);
    }
    };

    return (
    <div className={styles.controles}>
        <button onClick={restar} className={styles.masMenos}>-</button>
        <span className={styles.contador}>{contador}</span>
        <button onClick={sumar} className={styles.masMenos}>+</button>
    </div>
    );
};

export default Botones