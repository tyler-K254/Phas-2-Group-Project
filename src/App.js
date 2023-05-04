import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Products from './components/Products';
import Usage from './components/Usage';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/components/Welcome" element={<Welcome />}/>
      <Route path="/components/Usage" element={<Usage />}/>
      <Route path="/components/Products" element={<Products />}/>
      </Routes>
    </div>
   
  );
}

export default App;
