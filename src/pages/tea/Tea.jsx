import FarmInput from "../../components/farmInput/FarmInput";
import Sidebar from "../../components/sidebar/Sidebar";
import Transactions from "../../components/transactions/Transactions";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import styles from "./tea.module.css";

export default function Tea() {
  return (
    <>
      <Sidebar />
      <div className={styles.myFarm}>
        <div className={styles.top}>
          <Transactions />
        </div>
        <div className={styles.teaContainer}>
          <FarmInput />
          <WidgetLg />
        </div>
      </div>
    </>
  );
}
