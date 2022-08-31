import styles from "./farmInput.module.css";
import inputStyles from "../../pages/login/login.module.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useState } from "react";
import { farmInput } from "../../formSource";

export default function FarmInput() {
  const [data, setData] = useState({});

  // Add a new document in collection "tea"
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tea"), {
        ...data,
      });
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
      <h3>Tea Entry</h3>
      {farmInput.map((input) => (
        <div key={input.id}>
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
    </div>
  );
}
