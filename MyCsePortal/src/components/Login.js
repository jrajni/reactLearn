import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "../App.css"
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { Redirect,BrowserRouter } from 'react-router-dom';
 class NormalLoginForm extends React.Component {
     state={
         correctlogin:false
     }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          this.setState({correctlogin:true})
      }

    });

  };
  redirectionRender=()=>{
      if(this.state.correctlogin){
        return <Redirect exact to ='/exams'/>

      }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <BrowserRouter>
       
        <div>{this.redirectionRender()}
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button" >
              {/* <Link to ="/"> */}
            Log in
            {/* </Link> */}
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </div>
      </BrowserRouter>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm
