import React from 'react'
import {Button} from 'antd'
export default class StopWatch extends React.Component {
    state = { 
        time: {},
         seconds: 15 ,
         timer:0
      }
  
    secondsToTime=(secs)=>{
      let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
      let obj = {"h": hours, "m": minutes,"s": seconds};
      return obj;
    }
  
    componentDidMount=() =>{
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
  
    startTimer=()=> {
      if (this.state.timer == 0 && this.state.seconds > 0) {
        this.state.timer = setInterval(this.countDown, 1000);
      }
    }
  
    countDown=() =>{
    //   let minutes=this.state.minutes - 0.60;
      let seconds = this.state.seconds - 1;
    //   let minu= th
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,

      });
      
      if (seconds == 0) { 
console.log('reached 0 ');
        clearInterval(this.state.timer);
      }
    }
   render() {
      return(
        <div>
          <div style={{padding:"5px" }}><strong>Timer =</strong> {this.state.time.m} : {this.state.time.s}<br></br></div>
         <Button type="primary"onClick={this.startTimer}>Start</Button>
        </div>
      );
      }
  }
  