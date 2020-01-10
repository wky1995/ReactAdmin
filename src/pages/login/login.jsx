import React, {Component} from "react";
import {Form, Icon, Input, Button} from 'antd';
import "./login.less"
import logo from "./images/logo.png"
import {message} from "antd";



class Login extends Component {
   handleSubmit=(event)=>{
       event.preventDefault();
       this.props.form.validateFields(async (err,values)=>{
           if (!err){
               const {username,password}=values;
               console.log(username,password);
               const  url=`http://localhost:8000?username=${username}&password=${password}`;
              fetch(url, {method: 'GET'})
                   .then(response => {
                       console.log(response.json);
                      return  response.json();
                   }).then(result => {
                  if (result.data==="success"){
                      message.success('登录成功',2);
                      sessionStorage.setItem("userName", username);
                      sessionStorage.setItem("password", password);
                      this.props.history.replace('/')
                  }
              })
                   .catch(err => {
                       console.log(err);
                   });

           }
       })
   };


        render()
        {
            const form = this.props.form;
            const {getFieldDecorator} = form;
            return (
                <div className="login">
                    <header className="login-header">
                        <img src={logo} alt="logo"/>
                        <h1>react后台测试系统</h1>
                    </header>
                    <section className="login-content">
                        <h2>用户登陆</h2>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [
                                        {required: true, message: '请输入账号!'},
                                        {max: 12, message: '密码不能超过12位'},
                                        {min: 4, message: '密码不能少于4位'}
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="用户名"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [
                                        {required: true, message: '请输入密码!'},
                                        {max: 12, message: '密码不能超过12位'},
                                        {min: 4, message: '密码不能少于4位'}
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type="password"
                                        placeholder="密码"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登陆
                                </Button>
                            </Form.Item>
                        </Form>
                    </section>
                </div>
            )
        }
    }

    const
    WrappedLogin = Form.create()(Login);
    export
    default
    WrappedLogin;
