import React, {Fragment}  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import AccountState from './context/Account/AccountState'
import './App.css';

const App = () => {
  return (
    <AccountState>
      <Router>
        <Fragment>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </AccountState>
  );
}

export default App;
