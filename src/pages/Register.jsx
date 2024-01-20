import { Card, Form, message, Button } from 'antd'
import React, { useRef, useState, useEffect } from 'react'
import { FaCheckCircle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import InputField from '../components/InputField';
import ButtonGroup from '../components/Button';
import { FaUser } from 'react-icons/fa6';
import { RiLockPasswordFill } from "react-icons/ri";
import { FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Make sure to import useNavigate
import logo from '../assets/images/logo.png';

const USER_REGEX = /^[A-Za-z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = 'https://my.api.mockaroo.com/patient/register.json?key=e5ad3440&__method=POST';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMacthPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        const ref = userRef.current;
        if (ref) {
            ref.focus();
        }
    }, [userRef]);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);

    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');

    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        //validates user inputs before submission or button enabling through js hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg('Invalid Entry');
            return;

        }

        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    // withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(JSON.stringify(response))
            setSuccess(true);
            message.success('Registration Successful')
            //clear state and controlled inputs
            setUser('');
            setPwd('');
            setMacthPwd('');
        } catch (err) {
            if (!err?.respo) {
                setErrMsg('No server Response');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                navigate('/login')
            ) : (
                <div className="regContainer">
                    <section>

                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
                        <Card title={'Register Account'} headStyle={{ backgroundColor: '#002329', color: '#fff' }}>
                            <Form>
                                <label htmlFor='username'> <FaUser /> Username :
                                    <FaCheckCircle className={validName ? "valid" : "hide"} />
                                    <FaTimesCircle className={validName || !user ? "hide" : "invalid"} />
                                </label>
                                <InputField
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required={true}
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                                <p id='uidnote' className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                    <FaInfoCircle />
                                    4 to 24 characters.<br />
                                    Must begin with a letter.<br />
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>
                                <div className="mt-2">
                                    <label htmlFor='password'><RiLockPasswordFill /> Password :
                                        <FaCheckCircle className={validPwd ? "valid" : "hide"} />
                                        <FaTimesCircle className={validPwd || !pwd ? "hide" : "invalid"} />
                                    </label>
                                    <InputField
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required={true}
                                        aria-invalid={validPwd ? "false" : "true"}
                                        aria-describedby="pwdnote"
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                                    />
                                    <p id='pwdnote' className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
                                        <FaInfoCircle />
                                        8 to 24 characters.<br />
                                        Must include uppercase and lowercase letters, a number and a special character.<br />
                                        Allowed special characters : <span aria-label='exclamation mark'>!</span><span aria-label='at symbol'>@</span><span aria-label='hashtag'>#</span><span aria-label='dollar sign'>$</span><span aria-label='percentage'>%</span>
                                    </p>
                                </div>

                                <div className="mt-2">
                                    <label htmlFor='confirm_pwd'><FiEyeOff /> Confirm Password :
                                        <FaCheckCircle className={validMatch && matchPwd ? "valid" : "hide"} />
                                        <FaTimesCircle className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                    </label>
                                    <InputField
                                        type="password"
                                        id="confirm_pwd"
                                        onChange={(e) => setMacthPwd(e.target.value)}
                                        value={matchPwd}
                                        required={true}
                                        aria-invalid={matchPwd ? "false" : "true"}
                                        aria-describedby="cornfirmnote"
                                        onFocus={() => setMatchFocus(true)}
                                        onBlur={() => setMatchFocus(false)}
                                    />
                                    <p id='cornfirmnote' className={matchFocus && matchPwd && !validMatch ? "instructions" : "offscreen"}>
                                        <FaInfoCircle />
                                        8 to 24 characters.<br />
                                        Must match the first password input field.
                                    </p>
                                </div>
                                <div className='mt-3 w-100'>
                                    <Button disabled={!validName || !validPwd || !validMatch ? true : false} onClick={handleSubmit} block>Register</Button>
                                </div>
                            </Form>
                        </Card>
                    </section>
                </div>
            )}
        </>

    )
}

export default Register