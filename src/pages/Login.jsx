import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../assets/images/logo.png'

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    // Simulate API call for authentication (replace with your actual authentication logic)
    setTimeout(() => {
      setLoading(false);
      const { username, password } = values;

      // Check credentials (replace with your actual authentication logic)
      if (username === 'demo' && password === 'password') {
        message.success('Login successful!');
      } else {
        message.error('Invalid username or password');
      }
    }, 1000);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-12 col-sm-8 col-md-6 col-lg-4">
        <div className="d-block justify-content-center align-items-center" style={{ backgroundColor: '#002329', color: '#fff' }}>
          <div className="logo text-center px-2 py-3">
            <img
              src={logo}
              height={60}
              style={{ marginTop: '0 ' }}
              alt="Logo"
            />
          </div>
          <p className='py-3 text-center h4'>Login</p>
        </div>
        <Card className="p-2">
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon py-3" />}
                placeholder="Username"
                className="form-control"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon py-3" />}
                type="password"
                placeholder="Password"
                className="form-control"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="/">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button w-100 mb-2"
                loading={loading}
              >
                Log in
              </Button>
              Or <a href="/">register now!</a>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
