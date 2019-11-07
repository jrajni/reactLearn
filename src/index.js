import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Exams from './components/Exam';
import {Route,link ,BrowserRouter,Switch}from 'react-router-dom'
import NotFound from './components/Notfound'
import Home from './components/Home'
import Login from './components/Login'
import StudentHome from './components/StudentHome'
const routing=(
    <BrowserRouter>
 <div>
     <Switch>
        <Route exact path="/home" component={Home}></Route>
    <Route exact path="/login" component={Login}></Route>
     <Route exact path='/exams' component={Exams}></Route>
     <Route exact path="/StudentHome" component={StudentHome}></Route>
     <Route component={NotFound}></Route>
     </Switch>

 </div>
    </BrowserRouter>
)
ReactDOM.render (routing, document.getElementById('root'));

