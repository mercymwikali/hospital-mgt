import React, { useState, useEffect } from 'react';
import { Divider, Button, Skeleton } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TableField from '../components/TableField';
import SearchField from '../components/SearchField';
import axios from 'axios'

const columns = [
  {
    Header: 'No',
    accessor: 'Patient_No', // Use the key from your data object
    responsive: ['sm'],
  },
  {
    Header: 'Surname',
    accessor: 'Surname',
    responsive: ['sm'],
  },
  {
    Header: 'Other Names',
    accessor: 'other_names',
    responsive: ['sm'],
  },
  {
    Header: 'ID Number',
    accessor: 'ID_Number',
    responsive: ['sm'],
  },
  {
    Header: 'Tel',
    accessor: 'Tel ',
    responsive: ['sm'],
  },
  {
    Header: 'Gender',
    accessor: 'Gender',
    responsive: ['sm'],
  },
  {
    Header: 'Date_Registered',
    accessor: 'Date_Registered',
    responsive: ['sm'],

  },

];


const Patientlist = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my.api.mockaroo.com/patient_list.json?key=e5ad3440');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Simulate a delay for the loading effect (3 seconds)
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after the initial render


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
    // Check if the column accessor is 'Surname' or 'Date_Registered'
    if (column.accessor === 'Surname' || column.accessor === 'Date_Registered') {
      // Implement your sorting logic here
      console.log('Sorting:', column, sortOrder);

      // Update your sorting logic for the 'Surname' and 'Date_Registered' columns
      const sortedData = [...data].sort((a, b) => {
        // Handle sorting based on column accessor
        if (column.accessor === 'Surname') {
          return sortOrder === 'asc' ? a.Surname.localeCompare(b.Surname) : b.Surname.localeCompare(a.Surname);
        } else if (column.accessor === 'Date_Registered') {
          const dateA = new Date(a.Date_Registered);
          const dateB = new Date(b.Date_Registered);
          return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        }

        return 0; // Default case
      });

      // Update the state with the sorted data
      setData(sortedData);
    }
  };

  const handleFilter = (column, value) => {
    // Check if the column accessor is 'Surname' or 'ID_Number'
    if (column.accessor === 'Surname' || column.accessor === 'ID_Number') {
      // Implement your filtering logic here
      console.log('Filtering:', column, value);

      // Update the state with the filtered data
      const filteredData = data.filter((row) => {
        // Handle filtering based on column accessor
        if (column.accessor === 'Surname') {
          return row.Surname.toLowerCase().includes(value.toLowerCase());
        } else if (column.accessor === 'ID_Number') {
          return row.ID_Number.toLowerCase().includes(value.toLowerCase());
        }

        return true; // Default case
      });

      setData(filteredData);
    }
  };


  return (
    <div>
      <h5 className="card-title h4"><u>Patient List</u></h5>
      <Divider />
      <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
        <SearchField onSearch={handleSearch} onClear={handleClear} />
        <div className=" d-flex text-center gap-3">
          <Button type='primary' href="/addPatient" style={{ color: '#fff' }} >Add Patient</Button>
          <Button href="#" type='primary' style={{ color: '#fff' }} >Create a Visit</Button>

        </div>
      </div>
      <div className="table-responsive-lg">
        {loading ? (
          // Display loading skeleton while data is being fetched
          <Skeleton active paragraph={{ rows: 10 }} />
        ) : (
          // Display the table once data is loaded
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
        )}
      </div>
    </div>
  );
};
export default Patientlist;