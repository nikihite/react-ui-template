import styles from './FormLayout.css';
import { InputControl } from './FormControl.jsx';

export default function Form() {
  return (
    <div className={styles.page}>
      <div className={styles.Forms}>
        <form>
          <InputControl label="FAV COLOR" name="color" 
            placeholder="FIRST FAV"/>

          <InputControl label="OTHER" name="color" 
            placeholder="SEC. FAV"/>  
        </form>
      </div>
    </div>
  );
}
