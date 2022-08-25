import styles from "./sidebar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Farm Wallet</h3>
          <ul className={styles.sidebarList}>
            <Link to="/" className="link">
              <li className={`${styles.sidebarListItem} ${styles.active}`}>
                <HomeOutlinedIcon className={styles.sidebarIcon} />
                Dashboard
              </li>
            </Link>
            <Link to="/my-farm" className="link">
              <li className={styles.sidebarListItem}>
                <AgricultureOutlinedIcon className={styles.sidebarIcon} />
                My Farm
              </li>
            </Link>
            <li className={styles.sidebarListItem}>
              <SettingsOutlinedIcon className={styles.sidebarIcon} />
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
