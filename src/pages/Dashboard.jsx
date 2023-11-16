import React from 'react';
import { UserOutlined, ArrowUpOutlined, UsergroupAddOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Link } from 'react-router-dom';
import CorporateIncome from '../charts/CorporateIncome';
import MyCalendar from '../components/Calendar';


const Dashboard = () => {
  return (
    <div className="container-fluid mx-0" >
      <div className="row g-3">
        <Link to={'/patient-list'} className="col-6 col-md-3 text-decoration-none ">
          <div className="card cardhover">
            <div className="card-body">
              <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
              <p className=' py-2 h5'>Today Patient List</p>
              <p className='h4 '>125</p>
            </div>
          </div>
        </Link>
        <Link to={'/Inpatient'} className="col-6 col-md-3 text-decoration-none">
          <div className="card cardhover">
            <div className="card-body">
              <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
              <p className=' py-2 h5'>Inpatient List </p>
              <p className='h4 '>125</p>
            </div>
          </div>
        </Link>
        <Link to={'/Discharge-list'} className="col-6 col-md-3 text-decoration-none">
          <div className="card cardhover">
            <div className="card-body">
              <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
              <p className=' py-2 h5'>Discharge List</p>
              <p className='h4 '>125</p>
            </div>
          </div>
        </Link>
        <Link to={'/patient-list'} className="col-6 col-md-3 text-decoration-none">
          <div className="card cardhover">
            <div className="card-body">
              <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
              <p className=' py-2 h5'>Doc's Appointment</p>
              <p className='h4 '>125</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="row g-3 mt-3">
        <Link to={'/patient-list'} className="col-6 col-md-3 text-decoration-none ">
          <div className="card cardhover">
            <div className="card-body">
              <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
              <p className=' py-2 h5'>Lab Request</p>
              <p className='h4 '>125</p>
            </div>
          </div>
        </Link>
        <Link to={'/Inpatient'} className="col-6 col-md-3 text-decoration-none">
          <div className="card cardhover">
            <div className="card-body">
              <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
              <p className=' py-2 h5'>Radiology Request </p>
              <p className='h4 '>125</p>
            </div>
          </div>
        </Link>
        <Link to={'/Discharge-list'} className="col-6 col-md-3 text-decoration-none">
          <div className="card cardhover">
            <div className="card-body">
              <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
              <p className=' py-2 h5'>Pharmacy Request</p>
              <p className='h4 '>125</p>
            </div>
          </div>
        </Link>
        <Link to={'/patient-list'} className="col-6 col-md-3 text-decoration-none">
          <div className="card cardhover">
            <div className="card-body">
              <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
              <p className=' py-2 h5'>Discharge Requests</p>
              <p className='h4 '>125</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="row mt-3 g-3">
        <div className="col-12 col-md-8 ">
          <CorporateIncome />
        </div>
        <div className="col-12 col-md-4">
          <MyCalendar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
