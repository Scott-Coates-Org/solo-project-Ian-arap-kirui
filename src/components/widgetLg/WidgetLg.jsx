import styles from "./widgetLg.module.css";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useEffect, useState } from "react";

export default function WidgetLg() {
  const [data, setData] = useState([]);
  try {
    useEffect(() => {
      // LISTEN (REALTIME)
      const unsub = onSnapshot(
        collection(db, "tea"),
        (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });

          setData(
            list.sort((a, b) => new Date(b.datePicked) - new Date(a.datePicked))
          );
        },
        (error) => {
          console.log(error);
        }
      );

      return () => {
        unsub();
      };
    }, []);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className={styles.widgetLg}>
      <h3 className={styles.widgetLgTitle}>Latest transactions</h3>
      <table className={styles.widgetLgTable}>
        <tr className={styles.widgetLgTr}>
          <th className={styles.widgetLgTh}>Kilos Picked</th>
          <th className={styles.widgetLgTh}>Date of picking</th>
          <th className={styles.widgetLgTh}>Amount</th>
          <th className={styles.widgetLgTh}>Status</th>
        </tr>
        {data.map((item) => (
          <>
            <tr className={styles.widgetLgTr} key={item.id}>
              <td className={styles.widgetLgUser}>{item.kilos} kgs</td>
              <td className={styles.widgetLgDate}>{item.datePicked}</td>
              <td className={styles.widgetLgAmount}>ksh.{item.amount}</td>
              <td className={styles.widgetLgStatus}>
                <button className={styles.widgetLgButton}>{item.status}</button>
              </td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
}
