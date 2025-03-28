import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
