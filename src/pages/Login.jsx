import React from 'react';
import login from '../assets/images/login.svg';
import logo from '../assets/images/logo.png';
import { Space, Switch } from 'antd';
import { InfoCircleOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container-fluid'>
      <div className="d-flex justify-content-center align-items-center my-3">
        {/* <div className="image card p-4">
          <img src={login} style={{ fill: '#67336d' }} />
        </div> */}
        <div className="card w-50 py-3 px-2 text-center text-white" style={{ backgroundColor: "#16a5e4" }} >
          <div className=" text-center">
            <img
              width={100}
              src={logo}
              height={64}
              alt="Logo"
              className='py-2 img-fluid'
            />
          </div>
          <div className="row  g-3">
            <div className="text-center">
              <h3 className='py-2 fw-bold'>Login to your Account</h3>
              <p className='fs-6 fst-italic'>Enter Your Email and Password to access your Account</p>
            </div>
            <Space className='row  g-3'>
              <div className="d-flex">
                <label className='ps-5 pe-4'>Name<span className='text-danger'>*</span></label>
                <Input
                  placeholder="Enter your username"
                  prefix={<UserOutlined className="site-form-item-icon" style={{
                    color: "#67336d",
                  }} />}
                  size='large'
                  suffix={
                    <Tooltip title="Extra information">
                      <InfoCircleOutlined
                        style={{
                          color: "#67336d",
                        }}
                      />
                    </Tooltip>
                  }
                  className='col-12 col-md-8'
                />
              </div>

              <div className="d-flex">
                <label className='ps-5 pe-2'>Password <span className='text-danger'>*</span></label>
                <Input
                  placeholder="Enter your Password"
                  prefix={<RiLockPasswordLine className="site-form-item-icon" style={{
                    color: "#67336d",
                  }} />}
                  size='large'
                  suffix={
                    <Tooltip title="Extra information">
                      <InfoCircleOutlined
                        style={{
                          color: "#67336d",
                        }}
                      />
                    </Tooltip>
                  }
                  className='col-12 col-md-8'
                />
              </div>

              <div className="d-flex align-items-center ps-5">
                <Switch className='ms-5' color='#67336d'></Switch><p className='ps-2 pt-2' color='#67336d'>Remember Me</p>
              </div>
              <div className="text-center my-3">
                <Link to={'/'} type='submit' className='btn btn-primary'><LoginOutlined /> Login</Link>
              </div>
            </Space>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login