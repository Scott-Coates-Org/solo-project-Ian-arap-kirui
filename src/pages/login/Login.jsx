import { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
// import { signOut } from "firebase/auth";
import { auth } from "../../firebase/client";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

import styles from "./login.module.css";
import Hero from "../../image/Hero-sign-in.png";
import GoogleIcon from "../../image/Google.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  // const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      dispatch(
        login({
          displayName: user.user.displayName,
          email: user.user.email,
          accessToken: user.user.accessToken,
        })
      );
      navigate("/");
    }
  }, [user, dispatch, navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.loginContainer}>
          <div className={styles.header}>
            <h3>Welcome Back</h3>
            <p>Welcome back! Please enter your details</p>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.inputs}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputs}
            />
          </div>
          <div className={styles.innerBottom}>
            <div className={styles.radioContainer}>
              <input
                type="radio"
                name="remember password"
                id="remember password"
                className={styles.radioBtn}
              />
              <span>Remember me</span>
            </div>
            <p className={styles.forgotPassword}>
              <a
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Forgot password
              </a>{" "}
            </p>
          </div>
          <div className={styles.bottom}>
            <button
              onClick={() => signInWithGoogle()}
              className={styles.googleButton}
            >
              <img src={GoogleIcon} alt="Google Logo" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={Hero} alt="Hero" />
      </div>
    </div>
  );
};

export default Login;
