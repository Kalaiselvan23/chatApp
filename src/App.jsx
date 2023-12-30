import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register.jsx";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ChatContext} from "./context/ChatContext";
function App() {
  const [CurrentUser, setCurrentUser] = useState(null);
  const [chatUser, setchatUser] = useState({
    chatId: null,
    user: {},
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, [CurrentUser]);

  const ProtectedRoute = () => {
    if (!CurrentUser) {
      return <Navigate to={"/login"} replace />;
    }
    return <Home />;
  };
  return (
    <AuthContext.Provider value={{ CurrentUser, setCurrentUser }}>
      <ChatContext.Provider value={{chatUser,setchatUser}}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <ProtectedRoute />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </ChatContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
