import React from 'react';
import { UserOutlined, ArrowUpOutlined, UsergroupAddOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Avatar, Card, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='container overflow-hidden'>
      <div className="row">
        <Link to={'/patient-list'} className="col-12 col-md-3 card border-primary justify-content-center align-items-center py-1 mb-3" style={{ backgroundColor: '#67336d' }}>
          <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
          <p className='text-white py-2 h5'>Today Patient List</p>
          <p className='h4 text-white'>125</p>
        </Link>
        <Link to={'/Inpatient'} className="col-12 col-md-3 card border-primary justify-content-center align-items-center py-1 mb-3 ms-2" style={{ backgroundColor: '#67336d' }}>
          <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
          <p className='text-white py-2 h5'>Current InPatient List</p>
          <p className='h4 text-white'>125</p>
        </Link>
        <Link to={'/past-doctor-visit'} className="col-12 col-md-3 card border-primary justify-content-center align-items-center py-1 mb-3 ms-2" style={{ backgroundColor: '#67336d' }}>
          <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
          <p className='text-white py-2 h5'>Doctor's Appointment</p>
          <p className='h4 text-white'>125</p>
        </Link>
       
      </div>
    </div>
  )
}

export default Dashboard;
