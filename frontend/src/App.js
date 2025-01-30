import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoList from "./components/TodoList";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={token ? <TodoList token={token} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login setToken={setToken} />}
        />
        <Route
          path="/register"
          element={<Register setToken={setToken} />}
        />
      </Routes>
    </Router>
  );
};

export default App;