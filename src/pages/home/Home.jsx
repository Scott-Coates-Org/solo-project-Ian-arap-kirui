import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./home.module.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
// import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
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
          <WidgetLg />
        </div>
      </div>
    </>
  );
}
