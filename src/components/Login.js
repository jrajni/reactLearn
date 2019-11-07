import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import Exams from '../components/Exam'
import { Redirect,BrowserRouter } from 'react-router-dom';

const Credentials=[
    {
    email:"asd",
    password:"asd"},
    {
    email:"",
    password:""},
    {
    email:"",
    password:""},
    {
    email:"",
    password:""},
    {
    email:"",
    password:""},
    {
    email:"",
    password:""},
]
class NormalLoginForm extends React.Component {
    state={email:"",password:"",creden:{},redirection:false}
    eventHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          let myobj={
              email:this.state.email,
              password:this.state.password
          }
    this.setState({creden:myobj})

    const check=Credentials.filter((word)=>JSON.stringify(word)===JSON.stringify(myobj))
if(check.length){
this.setState({redirection:true})
}else{alert("incorrect credentials")}
}
    });
  };
myredirect=()=>{
    if(this.state.redirection){
        console.log("dscs")
       return <Redirect to="/exams"/>
    }
}
  

  render() {
    //   {this.myredirect()}
    const { getFieldDecorator } = this.props.form;
    return (
        <div>
        {this.myredirect()}
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your E-mail!' }],
          })(
            <Input onChange={this.eventHandler} name="email"
            style={{border:"1px solid white",borderBottom:"1px solid black"}}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input name="password"
            onChange={this.eventHandler}
            style={{border:"1px solid white",borderBottom:"1px solid black"}}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button htmlType="submit" className="login-form-button"style={{backgroundColor:"green",color:"white"}}>
            Log in
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm
