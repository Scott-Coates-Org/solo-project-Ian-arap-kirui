import styles from "./widgetLg.module.css";

export default function WidgetLg({ data }) {
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
