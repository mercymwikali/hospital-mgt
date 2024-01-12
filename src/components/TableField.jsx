import React from 'react';
import { Button, Space, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

const TableField = ({ columns, data, actions }) => {
  return (
    <table className="table table-hover table-striped table-responsive">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} scope="col">
              {column.title}
            </th>
          ))}
          {actions && <th scope="col">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, cellIndex) => (
              <td key={cellIndex}>
                {row[column.dataIndex]}
              </td>
            ))}
            {actions && (
              <td>
                <Space>
                  {actions.edit && (
                    <Tooltip title="Edit">
                      <Button
                        icon={<EditOutlined style={{ color: '#FFFDD0' }} />}
                        onClick={() => actions.edit(row)}
                        style={{ backgroundColor: '#faad14', border: 'none' }}
                      />
                    </Tooltip>
                  )}
                  {actions.delete && (
                    <Tooltip title="Delete">
                      <Button
                        icon={<DeleteOutlined style={{ color: '#FFFDD0' }} />}
                        onClick={() => actions.delete(row)}
                        style={{ backgroundColor: '#f5222d', border: 'none' }}
                      />
                    </Tooltip>
                  )}
                  {actions.view && (
                    <Tooltip title="View">
                      <Button
                        icon={<EyeOutlined style={{ color: '#FFFDD0' }} />}
                        onClick={() => actions.view(row)}
                        style={{ backgroundColor: '#52c41a', border: 'none' }}
                      />
                    </Tooltip>
                  )}
                </Space>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableField;
