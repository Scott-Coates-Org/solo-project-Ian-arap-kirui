// import Counter from "./components/Counter";
// import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Tea from "./pages/tea/Tea";
import { useSelector } from "react-redux";

function App() {
  const currentUser = useSelector((state) => state.auth.user);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/my-farm"
            element={
              <RequireAuth>
                <Tea />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
