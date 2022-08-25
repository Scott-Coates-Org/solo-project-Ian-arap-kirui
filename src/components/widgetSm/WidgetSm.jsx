import styles from "./widgetSm.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSm() {
  return (
    <div className={styles.widgetSm}>
      <span className={styles.widgetSmTitle}>New Join Members</span>
      <ul className={styles.widgetSmList}>
        <li className={styles.widgetSmListItem}>
          <img
            src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="user profile"
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Bob </span>
          </div>
          <button className={styles.widgetSmButton}>
            <VisibilityIcon className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
      </ul>
      <ul className={styles.widgetSmList}>
        <li className={styles.widgetSmListItem}>
          <img
            src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="user profile"
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Bob </span>
          </div>
          <button className={styles.widgetSmButton}>
            <VisibilityIcon className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
      </ul>
      <ul className={styles.widgetSmList}>
        <li className={styles.widgetSmListItem}>
          <img
            src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="user profile"
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Bob </span>
          </div>
          <button className={styles.widgetSmButton}>
            <VisibilityIcon className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
      </ul>
      <ul className={styles.widgetSmList}>
        <li className={styles.widgetSmListItem}>
          <img
            src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="user profile"
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Bob </span>
          </div>
          <button className={styles.widgetSmButton}>
            <VisibilityIcon className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
      </ul>
      <ul className={styles.widgetSmList}>
        <li className={styles.widgetSmListItem}>
          <img
            src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="user profile"
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Bob </span>
          </div>
          <button className={styles.widgetSmButton}>
            <VisibilityIcon className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
