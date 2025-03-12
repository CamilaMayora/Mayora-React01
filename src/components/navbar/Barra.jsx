import styles from './barra.module.css';
import CardWidget from './CardWidget/CardWidget';
import { NavLink } from 'react-router-dom'


const Barra = () => {
  return (
    <div className={styles.Navbar}>
    <h1>Mi Granito de Cafe</h1>
    <ul>
    <li>
  <NavLink 
    to="/" 
    className={({ isActive }) => isActive ? styles.activeLink : ""}
  >
    HOME
  </NavLink>
</li>
<li>
  <NavLink 
    to="/cursos" 
    className={({ isActive }) => isActive ? styles.activeLink : ""}
  >
    CURSOS
  </NavLink>
</li>
<li>
  <NavLink 
    to="/cafe" 
    className={({ isActive }) => isActive ? styles.activeLink : ""}
  >
    CAFE
  </NavLink>
</li>
<li>
  <NavLink 
    to="/especialidades" 
    className={({ isActive }) => isActive ? styles.activeLink : ""}
  >
    ESPECIALIDADES
  </NavLink>
</li>

    </ul>
    <CardWidget />
  </div>
  )
}

export default Barra