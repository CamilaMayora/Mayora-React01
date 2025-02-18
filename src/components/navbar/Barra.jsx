import styles from './barra.module.css';
import CardWidget from './CardWidget/CardWidget';

const Barra = () => {
  return (
    <div className={styles.Navbar}>
        <h1>Mi Granito de Cafe</h1>
        <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">CURSOS</a></li>
            <li><a href="">CAFE</a></li>
            <li><a href="">ESPECIALIDADES</a></li>
        </ul>
        <CardWidget />
    </div>
  )
}

export default Barra