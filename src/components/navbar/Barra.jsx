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
          exact 
          activeClassName={styles.activeLink} 
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/cursos" 
          activeClassName={styles.activeLink}
        >
          CURSOS
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/cafe" 
          activeClassName={styles.activeLink}
        >
          CAFE
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/especialidades" 
          activeClassName={styles.activeLink}
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