import styles from "./otherInput.module.css";
import inputStyles from "../../pages/login/login.module.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useState } from "react";
import { fertiliserInput } from "../../formSource";

export default function FarmInput() {
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);

  // Add a new document in collection "tea"
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "fertiliser"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      setSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle inputs
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };
  return (
    <div className={styles.farmInputWidget}>
      <h3>Fertiliser entry</h3>
      {fertiliserInput.map((input) => (
        <div key={input.id} className={styles.inputContainer}>
          <label>{input.label}</label>
          <input
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
            className={styles.input}
            onChange={handleInput}
          />
        </div>
      ))}
      <button onClick={handleAdd} className={inputStyles.button}>
        Add
      </button>
      {success && <span>successfully added!</span>}
    </div>
  );
}
