import React from 'react';
import { Switch } from 'antd';
import { InfoCircleOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center my-3">
        <div className="card col-12 col-md-8 col-lg-6 py-5 px-2 text-center" style={{ backgroundColor: "#62c1db" }}>
          <div className="text-center">
            <img
              src={logo}
              height={64}
              alt="Logo"
              className='pb-2 img-fluid logo'
            />
          </div>
          <div className="row g-3 mt-2" style={{ backgroundColor: '#fff' }}>
            <div className="text-center col-12">
              <h3 className='py-1 fw-bold'>Login to your Account</h3>
              <p className='fs-6 fst-italic'>Enter Your Email and Password to access your Account</p>
            </div>
            <div className='row g-3'>
              <div className="col-12">
                <div className="input-group mb-2">
                    <label className='py-2'>Username <span className='text-danger py-2'>*</span> </label>
                  <Input
                    placeholder="Enter your username"
                    prefix={<UserOutlined className="site-form-item-icon" style={{ color: "#62c1db" }} />}
                    size='large'
                    suffix={
                      <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: "#67336d" }} />
                      </Tooltip>
                    }
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="input-group mb-3">
                <label className='py-2'>Password <span className='text-danger py-2'>*</span> </label>

                  <Input
                    placeholder="username"
                    prefix={<RiLockPasswordLine className="site-form-item-icon" style={{ color: "#67336d" }} />}
                    size='large'
                    suffix={
                      <Tooltip title="password">
                        <InfoCircleOutlined style={{ color: "#67336d" }} />
                      </Tooltip>
                    }
                  />
                </div>
              </div>
            </div>
             <div className="col-12 d-flex align-items-center">
                <Switch style={{ color: '#67336d' }} />
                <label className='ps-2 pt-2' style={{ color: '#67336d', marginBottom: 0 }}>Remember Me</label>
              </div>
              <div className="text-center my-3 col-12">
                <Link to={'/'} type='submit' className='btn btn-primary'><LoginOutlined /> Login</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
