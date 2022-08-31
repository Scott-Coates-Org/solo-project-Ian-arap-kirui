import styles from "./farmInput.module.css";
import inputStyles from "../../pages/login/login.module.css";
import { collection, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useState } from "react";
import { farmInput } from "../../formSource";

export default function FarmInput() {
  const [data, setData] = useState({});

  // Add a new document in collection "tea"
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await setDoc(collection(db, "tea"), {
        kilos: 350,
        timeStamp: serverTimestamp(),
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
        <>
          <label>{input.label}</label>
          <input
            type={input.type}
            placeholder={input.placeholder}
            className={styles.input}
            onChange={handleInput}
          />
        </>
      ))}
      <button onClick={handleAdd} className={inputStyles.button}>
        Add
      </button>
    </div>
  );
}
