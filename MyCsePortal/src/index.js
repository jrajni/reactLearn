import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Exams from './components/Exam';
import {Route,link ,BrowserRouter,Switch}from 'react-router-dom'
import NotFound from './components/Notfound'
import Home from './components/Home'
import Login from './components/Login'
import { Redirect } from 'react-router-dom';
// import { Switch } from 'antd';
const routing=(
    <BrowserRouter>
 <div>
     <Switch>
     {/* <Redirect exact from ='/' to="/login"/> redirection not working needs to fig, out */} 
     <Route exact path='/login' component={Login}></Route>
    
        <Route exact path="/home" component={Home}></Route>
     <Route exact path='/exams'component={Exams}></Route>
     <Route component={NotFound}></Route>
     </Switch>

 </div>
    </BrowserRouter>
)

ReactDOM.render (routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
