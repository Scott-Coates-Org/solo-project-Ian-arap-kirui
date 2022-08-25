// import Counter from "./components/Counter";
// import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Tea from "./pages/tea/Tea";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-farm" element={<Tea />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
