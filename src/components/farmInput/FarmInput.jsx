import styles from "./farmInput.module.css";
import inputStyles from "../../pages/login/login.module.css";

export default function FarmInput() {
  return (
    <div className={styles.farmInputWidget}>
      <h3>Tea Entry</h3>
      <span>Enter your picking date</span>
      <input type="date" className={inputStyles.inputs} />
      <span>Enter your kilos picked</span>
      <input
        type="text"
        className={inputStyles.inputs}
        placeholder="enter your kilos"
      />{" "}
      <button className={inputStyles.button}>Add</button>
    </div>
  );
}
