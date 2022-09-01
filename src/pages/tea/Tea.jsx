import Sidebar from "../../components/sidebar/Sidebar";
import TeaInput from "../../components/teaInput/TeaInput";
// import Transactions from "../../components/transactions/Transactions";
import FertiliserInput from "../../components/otherInput/OtherInput";
import WeedingInput from "../../components/weedingInput/WeedingInput";
import styles from "./tea.module.css";

export default function Tea() {
  return (
    <>
      <Sidebar />
      <div className={styles.myFarm}>
        {/* <div className={styles.top}>
          <Transactions />
        </div> */}
        <div className={styles.teaContainer}>
          <TeaInput />
          <div className={styles.rightContainer}>
            <FertiliserInput />
            <WeedingInput />
          </div>
        </div>
      </div>
    </>
  );
}
