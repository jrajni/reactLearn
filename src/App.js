import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import A from './A'
import B from './B'


function App() {
  return (
    <div className="App">
      <A />
  {/* <MultiStepForm/> */}
    </div>
  );
}

export default App;
