import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../assets/images/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import InputField from '../components/InputField';
import { RiLockPasswordFill } from 'react-icons/ri';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const LOGIN_URL = 'https://my.api.mockaroo.com/patient/register.json?key=e5ad3440&__method=POST';


const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userFocus, setUserFocus] = useState(false);

  useEffect(() => {
    const ref = userRef.current;
    if (ref) {
      ref.focus();
    }
  }, [userRef]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  // Extracted the login logic into handleLogin
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'Application/json' },
          // withCredentials:true
        }
      );
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      message.success('Login Successful');
      navigate(from, { replace: true });
    } catch (error) {
      if (!error?.response) {
        setErrMsg('No Server Response');
      } else if (error.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (error.response?.status === 401) {
        setErrMsg('Unauthorized Access');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }




  };

  return (
    <div className="regContainer">
      <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
        <Card title={'Sign In'} headStyle={{ backgroundColor: '#002329', color: '#fff' }}>
          <Form>
            <label htmlFor='username'> <FaUser /> Username :
              {/* <FaCheckCircle className={validName ? "valid" : "hide"} />
              <FaTimesCircle className={validName || !user ? "hide" : "invalid"} /> */}
            </label>
            <InputField
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required={true}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <div className="mt-2">
              <label htmlFor='password'><RiLockPasswordFill /> Password :
                {/* <FaCheckCircle className={validPwd ? "valid" : "hide"} />
                <FaTimesCircle className={validPwd || !pwd ? "hide" : "invalid"} /> */}
              </label>
              <InputField
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required={true}
              />
            </div>
            <div className='mt-3 w-100'>
              <Button disabled={!user || !pwd ? true : false} onClick={handleLogin} block>Sign In</Button>
            </div>
          </Form>
        </Card>
      </section>
    </div>
  );
};

export default Login;
