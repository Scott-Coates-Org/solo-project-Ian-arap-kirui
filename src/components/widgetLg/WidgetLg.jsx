import styles from "./widgetLg.module.css";
// import { useEffect, useState } from "react";
// import { userRequest } from "../../requestMethods";
// import { format } from "timeago.js";

export default function WidgetLg() {
  return (
    <div className={styles.widgetLg}>
      <h3 className={styles.widgetLgTitle}>Latest transactions</h3>
      <table className={styles.widgetLgTable}>
        <tr className={styles.widgetLgTr}>
          <th className={styles.widgetLgTh}>Kilos Picked</th>
          <th className={styles.widgetLgTh}>Date</th>
          <th className={styles.widgetLgTh}>Amount</th>
          <th className={styles.widgetLgTh}>Status</th>
        </tr>

        <tr className={styles.widgetLgTr}>
          <td className={styles.widgetLgUser}>
            <span className={styles.widgetLgName}>367 kgs</span>
          </td>
          <td className={styles.widgetLgDate}>03/09/2022</td>
          <td className={styles.widgetLgAmount}>ksh.200</td>
          <td className={styles.widgetLgStatus}>
            <button className={styles.widgetLgButton}>paid</button>
          </td>
        </tr>
        <tr className={styles.widgetLgTr}>
          <td className={styles.widgetLgUser}>
            <span className={styles.widgetLgName}>367 kgs</span>
          </td>
          <td className={styles.widgetLgDate}>03/09/2022</td>
          <td className={styles.widgetLgAmount}>ksh.200</td>
          <td className={styles.widgetLgStatus}>
            <button className={styles.widgetLgButton}>paid</button>
          </td>
        </tr>
        <tr className={styles.widgetLgTr}>
          <td className={styles.widgetLgUser}>
            <span className={styles.widgetLgName}>367 kgs</span>
          </td>
          <td className={styles.widgetLgDate}>03/09/2022</td>
          <td className={styles.widgetLgAmount}>ksh.200</td>
          <td className={styles.widgetLgStatus}>
            <button className={styles.widgetLgButton}>paid</button>
          </td>
        </tr>
        <tr className={styles.widgetLgTr}>
          <td className={styles.widgetLgUser}>
            <span className={styles.widgetLgName}>367 kgs</span>
          </td>
          <td className={styles.widgetLgDate}>03/09/2022</td>
          <td className={styles.widgetLgAmount}>ksh.200</td>
          <td className={styles.widgetLgStatus}>
            <button className={styles.widgetLgButton}>paid</button>
          </td>
        </tr>
        <tr className={styles.widgetLgTr}>
          <td className={styles.widgetLgUser}>
            <span className={styles.widgetLgName}>367 kgs</span>
          </td>
          <td className={styles.widgetLgDate}>03/09/2022</td>
          <td className={styles.widgetLgAmount}>ksh.200</td>
          <td className={styles.widgetLgStatus}>
            <button className={styles.widgetLgButton}>paid</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
