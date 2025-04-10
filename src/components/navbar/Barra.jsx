import styles from './barra.module.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'


const Barra = () => {
  return (
    <div className={styles.Navbar}>
    <li>
      <NavLink
      to="/"
      className={({isActive}) => isActive ? styles.activeLink: ""}
      >
      Coffe☕
      </NavLink>
      </li>
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
    </ul>
    <CartWidget />
  </div>
  )
}

export default Barra