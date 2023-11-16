import React from 'react';
import { UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Link } from 'react-router-dom';
import CorporateIncome from '../charts/CorporateIncome';
import Area from '../charts/Area';
import Donut from '../charts/Donut';
import MyCalendar from '../components/Calendar';

const Dashboard = () => {
  return (
    <div className="container-fluid mx-0">
      <div className="row g-3">
        {[
          { title: 'Today Patient List', link: '/patient-list' },
          { title: 'Inpatient List', link: '/Inpatient' },
          { title: 'Discharge List', link: '/Discharge-list' },
          { title: "Doc's Appointment", link: '/patient-list' },
        ].map((item, index) => (
          <Link key={index} to={item.link} className="col-6 col-md-3 text-decoration-none">
            <div className="card cardhover">
              <div className="card-body">
                <Avatar
                  shape="square"
                  size="large"
                  icon={<UsergroupAddOutlined style={{ color: '#fff' }} />}
                  style={{ backgroundColor: '#67336d' }}
                />
                <p className='py-2 h5'>{item.title}</p>
                <p className='h4'>125</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="row mt-3 g-3">
        {[
          { title: 'Lab Request', link: '/patient-list' },
          { title: 'Radiology Request', link: '/Inpatient' },
          { title: 'Pharmacy Request', link: '/Discharge-list' },
          { title: 'Discharge Requests', link: '/patient-list' },
        ].map((item, index) => (
          <Link key={index} to={item.link} className="col-6 col-md-3 text-decoration-none">
            <div className="card cardhover">
              <div className="card-body">
                <Avatar
                  shape="square"
                  size="large"
                  icon={<UsergroupAddOutlined style={{ color: '#fff' }} />}
                  style={{ backgroundColor: '#67336d' }}
                />
                <p className='py-2 h5'>{item.title}</p>
                <p className='h4'>125</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="row mt-3 g-3">
      <div className="ps-4" style={{ color: '#82ca9d' }}><h6>Average Monthly Income</h6></div>
        <div className="col-12 col-md-8">
       
            <CorporateIncome />
       
        </div>
        <div className="col-12 col-md-4 px-3">
          <div className="ps-4" style={{ color: '#82ca9d' }}><h6>Appointments Calendar</h6></div>
          <MyCalendar />
        </div>
      </div>

      <div className="row mt-3 g-3">
        <div className="col-12 col-md-8">
          <div className="ps-4" style={{ color: '#82ca9d' }}><h6>Average Monthly Income</h6></div>
          <div className="div">
             <Area />
          </div>
         
        </div>
        <div className="col-12 col-md-4">
          <div className="ps-4" style={{ color: '#82ca9d' }}><h6>Average Admitted Patients</h6></div>
          <div className="div">
             <Donut />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
