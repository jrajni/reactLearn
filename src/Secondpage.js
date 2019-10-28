import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './App.css'

class SecondPageForm extends React.Component{
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.next();
          }
        });
      };
      previoushanlder= e=>{
        e.preventDefault();
        this.props.previous()
      }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {city,address}=this.props.value;
    return (
        <div className="firstPage">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('Address', {initialValue:this.props.value.address,
            rules: [{ required: true, message: 'Please input your Address!' }],
          })(
            <Input placeholder="Address"name="address"onChange={this.props.data}value={address} />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('city', {initialValue:this.props.value.city,
            rules: [{ required: true, message: 'Please input your City!' }],
          })(
            <Input
              placeholder="City"name="city"onChange={this.props.data}value={city}
            />,
          )}
        </Form.Item>
        <Form.Item>
         
        <Button type="primary" className="login-form-button" onClick={this.previoushanlder}>
            Previous
          </Button>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Next
          </Button>
          
        </Form.Item>
      </Form>
      {/* <p>{this.props.sendName}</p>*/}
      </div> 
    );
  }
}

const AddressForm = Form.create({ name: 'secondpage' })(SecondPageForm);
export default AddressForm;