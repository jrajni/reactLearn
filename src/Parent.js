import React, { Component } from 'react'
import MultiStepForm from './MultistepForm'
import SecondStepForm from './Secondpage'
import PreviewPage from './ThirdPage'
export default class Parent extends Component {
    state={
        name:"",
        address:"",
        regNo:"",
        city:"",
        step:1
    }
    eventHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    NextHandler=()=>{
        this.setState({step:this.state.step+1})
    }
    PreviousHandler=()=>{
        this.setState({step:this.state.step-1})
    }
    render() {
    switch(this.state.step){
        case 1:
            return <MultiStepForm next={this.NextHandler} value={this.state}data={this.eventHandler}/>
        case 2:
            return <SecondStepForm previous={this.PreviousHandler} value={this.state}next={this.NextHandler}data={this.eventHandler}/>
        case 3:
            return <PreviewPage previous={this.PreviousHandler}data={this.state}/>
        
        }
}
}
