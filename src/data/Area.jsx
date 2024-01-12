import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: 'Jan.', Corporate: 10, Cash: 5 },
  { name: 'Feb.', Corporate: 15, Cash: 8 },
  { name: 'Mar.', Corporate: 20, Cash: 12 },
  { name: 'Apr.', Corporate: 25, Cash: 15 },
  { name: 'May', Corporate: 18, Cash: 10 },
  { name: 'Jun.', Corporate: 22, Cash: 14 },
  { name: 'Jul.', Corporate: 28, Cash: 20 },
  { name: 'Aug.', Corporate: 30, Cash: 22 },
];

const LineAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorCorporate" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Corporate" stroke="#8884d8" />
        <Line type="monotone" dataKey="Cash" stroke="#82ca9d" />
        <Area
          type="monotone"
          dataKey="Corporate"
          stroke="#8884d8"
          fill="url(#colorCorporate)"
        />
        <Area
          type="monotone"
          dataKey="Cash"
          stroke="#82ca9d"
          fill="url(#colorCash)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineAreaChart;
