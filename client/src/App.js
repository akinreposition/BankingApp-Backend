import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/layouts/auth/Register";
import Login from "./components/layouts/auth/Login";
import Alerts from "./components/layouts/alerts/Alerts";
import PrivateRoute from "./routes/PrivateRoute";

import CardState from "./context/cards/CardState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <CardState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Routes>
                  <PrivateRoute path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </CardState>
    </AuthState>
  );
};

export default App;
