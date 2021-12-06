import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/layouts/auth/Register";
import Login from "./components/layouts/auth/Login";
import AccountState from "./context/Account/AccountState";
import AuthState from "./context/auth/AuthState";
import "./App.css";

const App = () => {
  return (
    <AuthState>
      <AccountState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </Fragment>
        </Router>
      </AccountState>
    </AuthState>
  );
};

export default App;
