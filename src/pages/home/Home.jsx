import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./home.module.css";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className={styles.home}>
        <FeaturedInfo />
        <Chart
          data={userData}
          title="Kilos picked"
          grid
          dataKey="Kilos Picked"
        />
        <div className={styles.homeWidgets}>
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </>
  );
}
