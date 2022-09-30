import styles from './FormLayout.css';
import { InputControl, SelectControl } from './FormControl.jsx';

export default function Form() {
  return (
    <div className={styles.page}>
      <div className={styles.Forms}>
        <form>
          <InputControl label="FAV COLOR" name="color" 
            placeholder="FIRST FAV"/>

          <InputControl label="OTHER" name="color" 
            placeholder="SEC. FAV"/>  

          <SelectControl label="shade" name="shade"
            placeholder="FAV SHADE" required>
            <option value="1">LIGHT</option>
            <option value="2">DARK</option>
            <option value="3">DARKER</option>
          </SelectControl>
        </form>
      </div>
    </div>
  );
}