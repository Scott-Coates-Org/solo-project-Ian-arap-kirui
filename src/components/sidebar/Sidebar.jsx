import styles from "./sidebar.module.css";
import DashIcon from "../../icons/sidebarIcons/HomeIcon.svg";
import TeaIcon from "../../icons/sidebarIcons/TeaIcon.svg";
import SettingIcon from "../../icons/sidebarIcons/SettingsIcon.svg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Farm Wallet</h3>
          <ul className={styles.sidebarList}>
            <Link to="/" className="link">
              <li className={styles.sidebarListItem}>
                {/* <DashIcon /> */}
                Dashboard
              </li>
            </Link>
            <li className={styles.sidebarListItem}>
              {/* <TeaIcon /> */}
              Tea
            </li>
            <li className={styles.sidebarListItem}>
              {/* <SettingIcon /> */}
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
