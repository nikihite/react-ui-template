import Navigation from './Navigation.jsx';
import Holidays from '../Holidays/Holidays';
import styles from './Header.css';
// import SlideoutMenu from './SlideoutMenu.jsx';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        {/* <SlideoutMenu /> */}
      </div>

      <h1>Holidays!</h1>

      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>

      <Holidays />
    </header>
  );
}
