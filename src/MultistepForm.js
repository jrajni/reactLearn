import React,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css'
import SecondPage from './Secondpage'
import {Redirect} from 'react-router-dom'
class NormalLoginForm extends React.Component {
   
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {this.props.next()}
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {name,regNo}=this.props.value;
    return (
        <div className="firstPage">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {initialValue:this.props.value.name,
            rules: [{ required: true, message: 'Please input your Name!' }],
          })(
            <Input placeholder="Name" name="name"onChange={this.props.data} value={name}/>,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('regNo', {initialValue:this.props.value.regNo,
            rules: [{ required: true, message: 'Please input your Registration Number!' }],
          })(
            <Input
              placeholder="Registration Number"name="regNo" onChange={this.props.data}value={regNo}
            />,
          )}
        </Form.Item>
        <Form.Item>
         
          <Button type="primary" htmlType="submit" className="login-form-button">
            Next
          </Button>
          
        </Form.Item>
      </Form></div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;