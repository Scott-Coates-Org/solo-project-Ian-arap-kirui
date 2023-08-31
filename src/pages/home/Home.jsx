import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./home.module.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useEffect, useState } from "react";
// import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
  const [data, setData] = useState([]);

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
  return (
    <>
      <Sidebar />
      <div className={styles.home}>
        <div className={styles.cards}>
          <FeaturedInfo type="tea" />
          <FeaturedInfo type="farm" />
          <FeaturedInfo type="weeding" />
          <FeaturedInfo type="cost" />
        </div>
        <Chart title="monthly costs" aspect={2 / 1} />
        <div className={styles.homeWidgets}>
          {/* <WidgetSm /> */}
          <WidgetLg data={data} />
        </div>
      </div>
    </>
  );
}
