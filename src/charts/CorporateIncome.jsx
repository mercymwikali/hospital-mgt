import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan.',
    Corporate: 18.9,
    Cash: 12.4,
  },
  {
    name: 'Feb.',
    Corporate: 28.8,
    Cash: 23.2,
  },
  {
    name: 'Mar.',
    Corporate: 39.3,
    Cash: 34.5,
  },
  {
    name: 'Apr.',
    Corporate: 81.4,
    Cash: 99.7,
  },
  {
    name: 'May',
    Corporate: 47,
    Cash: 52.6,
  },
  {
    name: 'Jun.',
    Corporate: 20.3,
    Cash: 35.5,
  },
  {
    name: 'Jul.',
    Corporate: 24,
    Cash: 37.4,
  },
  {
    name: 'Aug.',
    Corporate: 35.6,
    Cash: 42.4,
  },
];

function CorporateIncome() {
  return (
    <ResponsiveContainer width="100%" height="100%" >
      <BarChart width={400} height={450} data={data} title='Average Monthly Income'>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Corporate" fill="#8884d8" name="Corporate" />
        <Bar dataKey="Cash" fill="#82ca9d" name="Cash" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CorporateIncome;
