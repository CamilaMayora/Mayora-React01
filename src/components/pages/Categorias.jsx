import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firabese/client"; 
import { Link } from "react-router-dom";
import styles from './Categorias.module.css';

const Categorias = () => {
const [cursos, setCursos] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const obtenerCursos = async () => {
    try {
        const cursosCollection = collection(db, "products"); 
        const snapshot = await getDocs(cursosCollection);
        const cursosData = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(doc => doc.categoria === "cursos"); 
        setCursos(cursosData);
    } catch (error) {
        console.error("Error al cargar cursos:", error);
    } finally {
        setLoading(false);
    }
    };

    obtenerCursos();
}, []);

if (loading) {
    return <p className={styles.carga}>Cargando...</p>;
}

return (
    <div className={styles.cardcontainer}>
    {cursos.map((curso) => (
        <Link to={`/item/${curso.id}`} key={curso.id} className={styles.card}>
        <div className={styles.card}>
            <h3 className={styles.title}>{curso.title}</h3>
            <h4 className={styles.description}>{curso.description}</h4>
            <p className={styles.price}>
            <strong>${curso.price}</strong>
            </p>
        </div>
        </Link>
    ))}
    </div>
);
};

export default Categorias;
