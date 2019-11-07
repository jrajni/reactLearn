import React from 'react';
import TakeTest from './components/takeTest'
import Exam from './components/Exam'
import './App.css';

import { Router, Route, Switch } from "react-router";
function App() {
  return (
    <div className="App">
      <Exam/>
    </div>
  );
}

export default App;
