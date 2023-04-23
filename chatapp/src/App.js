import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Chat from './Pages/Chat'
// import Login from './Pages/Login'
// import Register from './Pages/Register'
// import SetAvatar from './Pages/SetAvatar'

const Chat = lazy(() => import("./Pages/Chat"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const SetAvatar = lazy(() => import("./Pages/SetAvatar"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Chat />} />
          <Route path="/setavatar" element={<SetAvatar />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
