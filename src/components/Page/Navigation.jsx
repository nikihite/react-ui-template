import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink className="Home" to="">Home Page</NavLink>
      <NavLink to="Halloween">Halloween Page</NavLink>
      <NavLink to="FourthJuly">Fourth of July Page</NavLink>
    </nav>
  );
}
