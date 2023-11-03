import React from 'react'
import { Tabs, message, Avatar, Descriptions, Input, DatePicker, Dropdown, Space } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { IoInformation, IoBook } from 'react-icons/io5';
import { UserOutlined, MailOutlined, PhoneOutlined, ReloadOutlined, DownOutlined } from '@ant-design/icons';
import { BiCalendar, BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const menuItems = [
    {
        key: '/triage',
        label: (
            <Link target='_blank' rel='noopener noreferrer' to='/triage'>Triage</Link>
        )
    },
    {
        key: '/dialysis',
        label: (
            <Link target='_blank' rel='noopener noreferrer' to='/triage'>Dialysis</Link>
        )
    }
];

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
const AddAppointment = () => {
    return (
        <div className="card border-primary py-2 px-2 ">
            <div className="card-body">
                <div className="d-flex justify-content-between aign-items center">
                    <h5 className="card-title h3"><u>Book Patient Appointment</u></h5>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                        <Link to="/patient-list" className="btn btn-primary me-2">Add Appointment</Link>
                        <BiEdit style={{ fontSize: 20, marginRight: 12, cursor: "pointer" }} />
                        <ReloadOutlined style={{ fontSize: 20, padding: 8, cursor: "pointer" }} />
                    </div>
                </div>

                <Tabs defaultActiveKey='1'>
                    <TabPane tab="Patient Information">
                        <Avatar className="card-text" size={100}></Avatar>
                        <Descriptions title="Patient Info">
                            <Descriptions.Item label="Patient ID:" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>

                            <Descriptions.Item label="Patient Type:" icon={<IoBook />}>
                                <select className="form-select form-select-sm" aria-label="Default select example" style={{ width: '75%' }}>
                                    <option selected></option>
                                    <option value="Corporate">Corporate</option>
                                    <option value="Cash">Cash</option>
                                </select>
                            </Descriptions.Item>
                            <Descriptions.Item label="Settlement Type:" icon={<IoBook />}>
                                <select className="form-select form-select-sm" aria-label="Default select example" style={{ width: '75%' }}>
                                    <option selected></option>
                                    <option value="Corporate">Corporate</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Credit">Credit</option>

                                </select>
                            </Descriptions.Item>
                            <Descriptions.Item label="Insurance:" icon={<IoBook />}>
                                <select className="form-select form-select-sm" aria-label="Default select example" style={{ width: '75%' }}>
                                    <option selected></option>
                                    <option value="Corporate">Corporate</option>
                                    <option value="Cash">Cash</option>
                                </select>
                            </Descriptions.Item>
                            <Descriptions.Item label="Membership No:" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>
                            <Descriptions.Item label="MCC No:" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>




                        </Descriptions>
                    </TabPane>
                </Tabs>
                <div className="d-flex align-items-center justify-content-center gap-3 my-3">
                    <div className=" d-flex text-center gap-3 align-items-center ">
                        <Link href="#" className="btn btn-primary">Save Patient</Link>
                        <Dropdown menu={{ menuItems, onClick }}>
                            <Link className='text-decoration-none' onClick={(e) => {
                                e.preventDefault()
                            }}>
                                <div className="btn btn-secondary d-flex"><p>Dispatch To</p><DownOutlined className='ps-2' /></div>
                            </Link>
                        </Dropdown>
                        <Link href="#" className="btn btn-primary">Reset Page</Link>
                    </div>
                </div>
            </div>
        </div >)
}

export default AddAppointment