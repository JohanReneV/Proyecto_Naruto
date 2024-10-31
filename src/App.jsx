import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './Pages/About/AboutPage';
import Home from './Pages/Home/HomePage';
import Favoritos from './Pages/Favoritos/Favoritos';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
