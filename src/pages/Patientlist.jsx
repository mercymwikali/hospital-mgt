import React, { useState } from 'react';
import { Divider, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TableField from '../components/TableField';
import SearchField from '../components/SearchField';

const columns = [
  {
    Header: 'No',
    accessor: 'No', // Use the key from your data object
    responsive: ['sm'],
  },
  {
    Header: 'Surname',
    accessor: 'Surname',
    responsive: ['sm'],
  },
  {
    Header: 'Other Names',
    accessor: 'Other Names',
    responsive: ['sm'],
  },
  {
    Header: 'ID Number',
    accessor: 'ID Number',
    responsive: ['sm'],
  },
  {
    Header: 'Tel',
    accessor: 'Tel',
    responsive: ['sm'],
  },
  {
    Header: 'Gender',
    accessor: 'Gender',
    responsive: ['sm'],
  },
  {
    Header: 'Date Registered',
    accessor: 'Date-Registered',
    responsive: ['sm'],

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
    'Date-Registered': '2023-01-01',
  },
  {
    key: '2',
    No: '2',
    Surname: 'Jim Green',
    'Other Names': 'Jim Green Other Names',
    'ID Number': '67890',
    Tel: '555-5678',
    Gender: 'Male',
    'Date-Registered': '2023-02-01',
  },
  {
    key: '3',
    No: '3',
    Surname: 'Joe Black',
    'Other Names': 'Joe Black Other Names',
    'ID Number': '54321',
    Tel: '555-4321',
    Gender: 'Male',
    'Date-Registered': '2023-03-01',
  },
  {
    key: '4',
    No: '4',
    Surname: 'Disabled User',
    'Other Names': 'Disabled User Other Names',
    'ID Number': '98765',
    Tel: '555-8765',
    Gender: 'Male',
    'Date-Registered': '2023-04-01',
  },
  {
    key: '5',
    No: '5',
    Surname: 'Another User',
    'Other Names': 'Another User Other Names',
    'ID Number': '55555',
    Tel: '555-5555',
    Gender: 'Female',
    'Date-Registered': '2023-05-01',
  },
];


const Patientlist = () => {
  const [selectionType, setSelectionType] = useState('checkbox');

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  const handleEdit = (row) => {
    // Handle edit action
    console.log('Edit:', row);
  };

  const handleDelete = (row) => {
    // Handle delete action
    console.log('Delete:', row);
  };

  const handleView = (row) => {
    // Handle view action
    console.log('View:', row);
  };
  const handleSearch = (searchText) => {
    // Implement your search logic here
    console.log('Searching for:', searchText);
  };
  const handleClear = () => {
    // Implement your clear logic here
    console.log('Clearing search');
  };

  const handleSort = (column, sortOrder) => {
    // Implement your sorting logic here
    console.log('Sorting:', column, sortOrder);
  };

  const handleFilter = (column, value) => {
    // Access the specific column's onFilter function
    const { onFilter } = column;

    // Implement your filtering logic here
    console.log('Filtering:', column, value);

    // Call the onFilter function if available
    if (onFilter) {
      onFilter(value);
    }
  };

  return (
    <div>
      <h5 className="card-title h4"><u>Patient List</u></h5>
      <Divider />
      <div className="d-flex align-items-center justify-content-start gap-3 mb-3">
        {/* <SearchField onSearch={handleSearch} onClear={handleClear} /> */}
        <div className=" d-flex text-center gap-3">
          <Button type='primary' href="/addPatient" style={{ color: '#fff' }} >Add Patient</Button>
          <Button href="#" type='primary' style={{ color: '#fff' }} >Create a Visit</Button>

        </div>
      </div>
      <div className="table-responsive-lg">
        <TableField
          columns={columns.map((column) => ({
            ...column,
            Filter: column.accessor !== 'No' && column.accessor !== 'Date-Registered' ? (
              ({ column }) => (
                <input
                  type="text"
                  placeholder={`Filter ${column.Header.toLowerCase()}`}
                  onChange={(e) => handleFilter(column, e.target.value)}
                />
              )
            ) : null,
          }))}
          data={data}
          actions={{ edit: handleEdit, delete: handleDelete, view: handleView }}
          onSort={handleSort}
          onFilter={handleFilter}
        />
      </div>
    </div>
  );
};
export default Patientlist;