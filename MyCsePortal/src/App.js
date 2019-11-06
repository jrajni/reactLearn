import React from 'react';
import TakeTest from './components/takeTest'
import Practice from './components/Practice'
import Exam from './components/Exam'
import './App.css';

import { Router, Route, Switch } from "react-router";
function App() {
  return (
    <div className="App">
      <Exam/>
{/* <TakeTest/> */}
{/* <Practice/> */}
    </div>
  );
}

export default App;
