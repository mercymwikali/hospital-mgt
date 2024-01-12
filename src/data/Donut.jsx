import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const data = [
  { name: 'Admitted Patients', value: 25 },
  { name: 'Empty Beds', value: 75 },
];

const COLORS = ['#0088FE', '#00C49F']; // You can customize the colors as needed

const DonutChart = () => {
  return (
    <ResponsiveContainer width={350} height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
