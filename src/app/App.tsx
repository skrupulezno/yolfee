import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/HomePage";
import "../firebase/firebase";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
  );
}

export default App;
