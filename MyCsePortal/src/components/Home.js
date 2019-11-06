import React, { Component } from 'react'
import {Button} from 'antd'
import Exams from '../components/Exam'
import {Link} from 'react-router-dom'
import Login from '../components/Login'
export class Home extends Component {
    
    render() {
        return (
            <div>
                <h1>this is home page</h1>
                <Link to="/exams">click me </Link> 
               </div>
        )
    }
}

export default Home
