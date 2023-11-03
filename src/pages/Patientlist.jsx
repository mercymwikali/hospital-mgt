import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import { BiCalendar, BiEdit } from 'react-icons/bi';
import { UserOutlined, MailOutlined, PhoneOutlined, ReloadOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

const columns = [
    {
        dataIndex: '',
        responsive: ['md'],

    },
    {
        title: 'No',
        dataIndex: 'No',
        responsive: ['md'],
    },
    {
        title: 'Surname',
        dataIndex: 'Surname',
        responsive: ['md'],

    },
    {
        title: 'Other Names',
        dataIndex: 'Other Names',
        responsive: ['md'],

    },
    {
        title: 'ID Number',
        dataIndex: 'ID Number',
        responsive: ['md'],

    },
    {
        title: 'Tel',
        dataIndex: 'Tel',
        responsive: ['md'],

    },
    {
        title: 'Gender',
        dataIndex: 'Gender',
        responsive: ['md'],

    },
    {
        title: 'Date_Registered',
        dataIndex: 'Date-Registered',
        responsive: ['md'],
    },
];

const data = [
    {
        key: '1',
        No: '1',
        Surname: 'John Brown',
        'Other Names': 'John Brown Other Names',
        'ID Number': '12345',
        Tel: '555-1234',
        Gender: 'Male',
        'Date-Registered': '2023-01-01'
    },
    {
        key: '2',
        No: '2',
        Surname: 'Jim Green',
        'Other Names': 'Jim Green Other Names',
        'ID Number': '67890',
        Tel: '555-5678',
        Gender: 'Male',
        'Date-Registered': '2023-02-01'
    },
    {
        key: '3',
        No: '3',
        Surname: 'Joe Black',
        'Other Names': 'Joe Black Other Names',
        'ID Number': '54321',
        Tel: '555-4321',
        Gender: 'Male',
        'Date-Registered': '2023-03-01'
    },
    {
        key: '4',
        No: '4',
        Surname: 'Disabled User',
        'Other Names': 'Disabled User Other Names',
        'ID Number': '98765',
        Tel: '555-8765',
        Gender: 'Male',
        'Date-Registered': '2023-04-01'
    },
    {
        key: '5',
        No: '5',
        Surname: 'Another User',
        'Other Names': 'Another User Other Names',
        'ID Number': '55555',
        Tel: '555-5555',
        Gender: 'Female',
        'Date-Registered': '2023-05-01'
    },
];

// Now the 'data' array matches the specified column headers.


// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};
const Patientlist = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <div>
            <div className="d-flex justify-content-between aign-items center">
                <h5 className="card-title h4"><u>Patient List</u></h5>
                <BiEdit style={{ fontSize: 20, marginRight: 12, cursor:"pointer" }} />
            </div>
            <Divider />
            <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                <ReloadOutlined style={{fontSize:20, padding:8,  cursor:"pointer"}} />
                <div className=" d-flex text-center gap-3">
                    <Link to="/addPatient" className="btn btn-primary">Add Patient</Link>
                    <Link href="#" className="btn btn-secondary">Create a Visit</Link>
                    <Link href="#" className="btn btn-primary">Edit Page</Link>
                </div>
            </div>
            <div className="table-responsive">
               <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                scroll='scroll'
                style={{color:"#fff"}}
            />  
            </div>
           
        </div>
    );
};
export default Patientlist;