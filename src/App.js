import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Tea from "./pages/tea/Tea";
import { useSelector } from "react-redux";
import Transaction from "./pages/Transactions/Transaction";

function App() {
  const currentUser = useSelector((state) => state.auth.user);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <>
      <div className="App">
        <div className="appContainer">
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
            <Route
              path="/transactions"
              element={
                <RequireAuth>
                  <Transaction />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
