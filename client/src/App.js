import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/navbar/Navbar';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      Account Keeper
    </div>
  );
}

export default App;
