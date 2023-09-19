import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
