import styles from "./sidebar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { logout } from "../../redux/authSlice";
import { auth } from "../../firebase/client";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const logoutHandler = () => {
    signOut(auth);
    dispatch(logout(navigate("/login")));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Farm Wallet</h3>
          <ul className={styles.sidebarList}>
            <span>Hello, {userName}</span>
            <Link to="/" className="link">
              <li className={`${styles.sidebarListItem} ${styles.active}`}>
                <HomeOutlinedIcon className={styles.sidebarIcon} />
                <p className={styles.iconTxt}>Dashboard</p>
              </li>
            </Link>
            <Link to="/my-farm" className="link">
              <li className={styles.sidebarListItem}>
                <AgricultureOutlinedIcon className={styles.sidebarIcon} />
                <p className={styles.iconTxt}> My Farm</p>
              </li>
            </Link>
            {/* <li className={styles.sidebarListItem}>
              <SettingsOutlinedIcon className={styles.sidebarIcon} />
              Settings
            </li> */}
            <li
              className={styles.sidebarListItem}
              onClick={logoutHandler}
              style={{ marginTop: "20em" }}
            >
              <LogoutOutlinedIcon className={styles.sidebarIcon} />
              <p className={styles.iconTxt}> Log-out</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
