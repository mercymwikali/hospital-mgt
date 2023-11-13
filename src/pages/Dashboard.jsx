import React from 'react'
import { UserOutlined, ArrowUpOutlined, UsergroupAddOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Avatar, Card, Statistic } from 'antd';

const Dashboard = () => {
  return (
    <div className='conatiner-fluid'>
      <div className="row g-3 mx-1 ">
        <div className="col-md-3 card border-primary  text-center justify-content-center align-items-center py-1">
          <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
          <p className='text-primary py-2 h5'>Today Patient List</p>
          <p className='h4 text-primary'>125</p>
        </div>
        <div className="col-md-3 card border-primary   text-center justify-content-center align-items-center py-2">
          <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
          <p className='text-primary py-2 h5'>Current InPatient List</p>
          <p className='h4 text-primary'>125</p>
        </div>
        <div className="col-md-3 card border-primary text-center justify-content-center align-items-center py-2">
          <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
          <p className='text-primary py-2 h5'>Doctor's Appointment</p>
          <p className='h4 text-primary'>125</p>
        </div>
        <div className=" col-md-3 card border-primary text-center justify-content-center align-items-center py-2">
          <Avatar shape="square" size="large" icon={<UsergroupAddOutlined style={{ color: '#fff' }} />} style={{ backgroundColor: '#67336d' }} />
          <p className='text-primary py-2 h5'>Discharge List</p>
          <p className='h4 text-primary'>125</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard