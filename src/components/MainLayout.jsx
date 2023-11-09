import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AppstoreOutlined, UserOutlined, CheckSquareOutlined, DropboxCircleFilled, MenuFoldOutlined, MenuUnfoldOutlined, MailOutlined, BellFilled } from '@ant-design/icons';
import { Layout, Menu, theme, Button, Avatar, Badge, Breadcrumb } from 'antd';
import { FaWheelchair, FaUserDoctor, FaUserNurse, FaEyeDropper, FaRadiation, } from "react-icons/fa6"
import { BiPurchaseTag } from "react-icons/bi"
import { GiMedicines, GiSoapExperiment } from 'react-icons/gi'
import { TbRadioactive, TbMassage, TbDental } from 'react-icons/tb'
import { LuBaby } from 'react-icons/lu'
import { IoNutritionOutline, IoNutritionSharp } from 'react-icons/io5'
import Sigonout from './Signout';
import logo from '../assets/images/logo.png'

const { Header, Content, Footer, Sider } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className='mt-0' >
            <Sider
                className='sidemenu'
                // trigger={null}
                collapsible collapsed={collapsed}
                breakpoint="md"
                collapsedWidth={collapsed ? 0 : 230}
                inlineCollapsed={collapsed}
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: '#47a5db'
                }}
            >
                <div className="logo text-center">
                    <img
                        src={logo}
                        height={64}
                        style={{ maxWidth :'100%', marginTop: '0' }}
                        alt="Logo"
                    />
                </div>

                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['/']}
                    onClick={(item) => {
                        //item.key
                        navigate(item.key);
                    }}
                    style={{
                        backgroundColor: '#47a5db'

                    }}
                    items={[
                        {
                            key: '/',
                            icon: <AppstoreOutlined />,
                            label: 'Dashboard',
                        },
                        {
                            key: '/patient-registration',
                            icon: <FaWheelchair style={{ color: '#fff' }} />,
                            label: ' Patient Registration',
                            children: [
                                {
                                    key: '/addPatient',
                                    label: 'Add Patient'
                                },
                                {
                                    key: '/patient-list',
                                    label: 'Patient List'
                                },
                            ]
                        },
                        {
                            key: '/appointements',
                            icon: <CheckSquareOutlined />,
                            label: 'Appointements',
                            children: [
                                {
                                    key: '/add-appointment',
                                    label: 'Add Appointment'
                                },
                                {
                                    key: '/Appointment-list',
                                    label: 'Appointment List'
                                },
                                {
                                    key: '/Dispatched-List',
                                    label: 'Dispatched List'
                                },
                            ]
                        },
                        {
                            key: '/triage',
                            icon: <DropboxCircleFilled />,
                            label: 'Triage',
                            children: [
                                {
                                    key: '/observation-list',
                                    label: 'Observation List'
                                },
                                {
                                    key: '/walk-in',
                                    label: 'Walk In List'
                                },
                                {
                                    key: '/procedure-queues',
                                    label: 'Procedure Queues'
                                },
                                {
                                    key: '/dispatched-observation-list',
                                    label: 'Dispatched Observation List'
                                },
                                {
                                    key: '/patient-list',
                                    label: 'Patient List'
                                },
                            ]
                        },
                        {
                            key: '/doctors',
                            icon: <FaUserDoctor />,
                            label: 'Doctor',
                            children: [
                                {
                                    key: '/Outpatient-visits',
                                    label: 'Outpatient visits'
                                },
                                {
                                    key: '/Inpatient',
                                    label: 'Inpatient'
                                },
                                {
                                    key: '/past-doctor-visit',
                                    label: 'Past Doctor Visit'
                                },
                                {
                                    key: 'Patient-Amdn',
                                    label: 'Patient Admission'
                                },
                                {
                                    key: '/MCH-outpatient',
                                    label: 'MCH Outpatient'
                                },
                                {
                                    key: '/theatre-day-case',
                                    label: 'Theatre'
                                },
                                {
                                    key: '/procedure-queues',
                                    label: 'Procedure Queues'
                                },
                                {
                                    key: '/anaesthetistia',
                                    label: 'Anaesthestia'
                                },
                                {
                                    key: '/Surgeon',
                                    label: 'Surgeon'
                                },
                                {
                                    key: '/Discharge-req',
                                    label: 'Discharge Requests'
                                },
                                {
                                    key: '/Discharge-list',
                                    label: 'Discharge List'
                                },
                                {
                                    key: '/pharmacy-list-Outpatient',
                                    label: 'Pharmacy List Outpatient'
                                },
                                {
                                    key: '/Pharmacy-list-inpatient',
                                    label: 'Pharmacy List Inpatient'
                                },
                                {
                                    key: '/Pharmacy-history',
                                    label: 'Pharmacy History'
                                },
                                {
                                    key: '/pharmacy-list-returns',
                                    label: 'Pharmacy List Returns'
                                },
                                // {
                                //     key: '/purchase-req',
                                //     label: 'Purchase Requisition'
                                // },
                            ]
                        },
                        {
                            key: '/procurement',
                            icon: <BiPurchaseTag />,
                            label: 'Procurement/Store',
                            children: [
                                {
                                    key: '/purchase-req',
                                    label: 'Purchase Requisition'
                                }
                            ]
                        },
                        {
                            key: '/Protocal and Guidelines',
                            type: 'group',
                            label: 'Protocal and Guidelines',
                        },
                        {
                            key: '/Dental',
                            icon: <TbDental />,
                            label: 'Dental',
                            children: [
                                {
                                    key: '/Dental-outpatient',
                                    label: 'Outpatient'
                                },
                                {
                                    key: '/Dental-inpatient',
                                    label: 'Inpatient'
                                },
                            ]
                        },
                        {
                            key: '/nurses',
                            icon: <FaUserNurse />,
                            label: 'Nurse',
                            children: [
                                {
                                    key: 'Patient-Amdn',
                                    label: 'Admit Patient'
                                },
                                {
                                    key: '/Ward-Management',
                                    label: 'Ward Management'
                                },
                                {
                                    key: '/Outpatient-visits',
                                    label: 'Outpatient visits'
                                },
                                {
                                    key: '/Inpatient',
                                    label: 'Current Inpatients'
                                },
                                {
                                    key: '/past-doctor-visit',
                                    label: 'Past Doctor Visit'
                                },

                                {
                                    key: '/theatre-Nurse',
                                    label: 'Theatre Nurse'
                                },
                                {
                                    key: '/procedure-queues',
                                    label: 'Procedure Queues'
                                },
                                {
                                    key: '/Discharge-req',
                                    label: 'Discharge Requests'
                                },
                                {
                                    key: '/Discharge-list',
                                    label: 'Discharge List'
                                },
                                // {
                                //     key: '/purchase-req',
                                //     label: 'Purchase Requisition'
                                // },
                            ]
                        },
                        {
                            key: '/Pharmacy',
                            icon: <GiMedicines />,
                            label: 'Pharmacy',
                            children: [
                                {
                                    key: '/pharmacy-list-Outpatient',
                                    label: 'Pharmacy List Outpatient'
                                },
                                {
                                    key: '/Pharmacy-list-inpatient',
                                    label: 'Pharmacy List Inpatient'
                                },
                                {
                                    key: '/Pharmacy-history',
                                    label: 'Pharmacy History'
                                },
                                {
                                    key: '/pharmacy-list-returns',
                                    label: 'Pharmacy List Returns'
                                },
                                {
                                    key: '/procedure-queues',
                                    label: 'Procedure Queues'
                                },
                            ]
                        },
                        {
                            key: '/Radiology',
                            icon: <FaRadiation />,
                            label: 'Radiology',
                            children: [
                                {
                                    key: '/Radiology-list-Outpatient',
                                    label: 'Radiology List Outpatient'
                                },
                                {
                                    key: '/Radiology-list-inpatient',
                                    label: 'Radiology List Inpatient'
                                },
                                {
                                    key: '/Radiology-history',
                                    label: 'Radiology History'
                                },
                                {
                                    key: '/walk-in',
                                    label: 'Walk In List'
                                },
                                // {
                                //     key: '/procedure-queues',
                                //     label: 'Procedure Queues'
                                // },
                            ]
                        },
                        {
                            key: '/theatre',
                            icon: <FaEyeDropper />,
                            label: 'Theatre',
                        },
                        {
                            key: '/Laboratory',
                            icon: <GiSoapExperiment />,
                            label: 'Laboratory',
                            children: [
                                {
                                    key: '/Lab-list-Outpatient',
                                    label: 'Laboratory Outpatient List'
                                },
                                {
                                    key: '/Lab-list-inpatient',
                                    label: 'Laboratory Inpatient List'
                                },
                                {
                                    key: '/Lab-history',
                                    label: 'Laboratory History'
                                },
                                {
                                    key: '/Inpatient',
                                    label: 'Current Inpatient'
                                },
                                {
                                    key: '/walk-in',
                                    label: 'Walk In List'
                                },
                                {
                                    key: '/treatment-sheet',
                                    label: 'Treatment Sheet'
                                },
                                {
                                    key: '/Price-list',
                                    label: 'Price List'
                                },
                            ]
                        },
                        {
                            key: '/dialysis',
                            icon: <FaEyeDropper />,
                            label: 'Dialysis',
                            children: [
                                {
                                    key: '/Nurse',
                                    label: 'Nurse'
                                },
                                {
                                    key: '/Doctor',
                                    label: "Doctor"
                                },
                                {
                                    key: '/Inpatient',
                                    label: 'Current Inpatient'
                                },
                                {
                                    key: '/walk-in',
                                    label: 'Walk In List'
                                },
                            ]
                        },
                        {
                            key: '/MCH',
                            icon: <LuBaby style={{ color: '#fff' }} />,
                            label: 'MCH',
                            children: [
                                {
                                    key: '/MCH-outpatient',
                                    label: 'MCH Outpatient'
                                },
                                {
                                    key: '/Mother-list',
                                    label: "Mother's List"
                                },
                                {
                                    key: '/Child-list',
                                    label: 'Children  List'
                                },
                                {
                                    key: '/MCH',
                                    label: 'MCH'
                                },
                            ]
                        },
                        {
                            key: '/Physio',
                            icon: <TbMassage />,
                            label: 'Physiotherapy',
                            children: [
                                {
                                    key: '/Physio-list-Outpatient',
                                    label: 'Physio Outpatient List'
                                },
                                {
                                    key: '/Physio-list-inpatient',
                                    label: 'Physio Inpatient List'
                                },
                                {
                                    key: '/Physio-history',
                                    label: 'Laboratory History'
                                },
                                {
                                    key: '/Physio-Gym-list',
                                    label: 'Physio Gym List'
                                },
                                {
                                    key: '/walk-in',
                                    label: 'Walk In List'
                                },

                            ]
                        },
                        {
                            key: '/Nutrition',
                            icon: <IoNutritionSharp />,
                            label: 'Nutrition',
                            children: [
                                {
                                    key: '/Nutrition-outpatient-list',
                                    label: 'Nutrition Outpatient List'
                                },
                                {
                                    key: '/Nutrition-Inpatient-list',
                                    label: 'Nutrition-Inpatient-list'
                                },
                            ]
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout"
                style={{
                    marginLeft: collapsed ? 80 : 230,
                }}
            >
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        zIndex: 1

                    }}
                    className='header'

                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined style={{ color: "#67336d" }} /> : <MenuFoldOutlined style={{ color: "#67336d" }} />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    // className='d-sm-none d-md-block'
                    />
                    <div className="d-flex gap-4 pe-4"
                        style={{ justifyContent: 'space-evenly', alignItems: 'center', paddingRight: 12, cursor: 'pointer' }}>
                        <div className="d-flex gap-4">
                            <Badge count={10} dot>
                                <MailOutlined style={{ fontSize: 22, color: "#67336d" }} />
                            </Badge>
                            <Badge count={20}>
                                <BellFilled style={{ fontSize: 22, color: "#67336d" }} />
                            </Badge>
                        </div>

                        <Badge>
                            <Avatar
                                style={{
                                    fontSize: 22
                                }}
                                icon={<UserOutlined style={{ color: "#67336d" }} />}
                            />
                            <Sigonout />
                        </Badge>
                    </div>

                </Header>

                <Layout>
                    <Breadcrumb
                        style={{
                            margin: '4px',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            margin: '18px 10px 0',
                            overflow: 'initial',

                        }}
                    >
                        <div
                            style={{
                                padding: 24,
                                minHeight: '100%',
                                background: colorBgContainer,
                            }}
                        >
                            <Outlet />
                        </div>
                    </Content>
                </Layout>

                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    HMIS ©2023 Created by MayFair
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;