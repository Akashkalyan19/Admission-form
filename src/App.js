import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Submit from './components/submit';
import Fill from './components/Fill';
function App() {
  return (
    <Routes>
      <Route path="/Admission-form" element={<Fill/>}/>
      <Route path="/submit" element={<Submit/>}/>
    </Routes>
  );
}

export default App;
