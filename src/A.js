import React, { Component } from 'react'
import B from './B'
export class A extends Component {
    state={
        counter:1
    }

    IncrementButtonHandler=()=>{
        this.setState({counter:this.state.counter+1})
    }

    DecrementButtonHandler=()=>{
        this.setState({counter:this.state.counter-1})
    }
    
    render() {
        const{counter}=this.state;
        return (
            <div>
                <h1>this is the counter value</h1>

                <B sendCounter={counter} sendDec={this.DecrementButtonHandler} sendInc={this.IncrementButtonHandler}/>
            </div>
        )
    }
}

export default A
