import React from 'react';
import { Column } from '@ant-design/charts';

const CorporateIncome = () => {
    const data = [
        {
          name: 'Corporate',
          month: 'Jan.',
          averageRainfall: 18.9,
        },
        {
          name: 'Corporate',
          month: 'Feb.',
          averageRainfall: 28.8,
        },
        {
          name: 'Corporate',
          month: 'Mar.',
          averageRainfall: 39.3,
        },
        {
          name: 'Corporate',
          month: 'Apr.',
          averageRainfall: 81.4,
        },
        {
          name: 'Corporate',
          month: 'May',
          averageRainfall: 47,
        },
        {
          name: 'Corporate',
          month: 'Jun.',
          averageRainfall: 20.3,
        },
        {
          name: 'Corporate',
          month: 'Jul.',
          averageRainfall: 24,
        },
        {
          name: 'Corporate',
          month: 'Aug.',
          averageRainfall: 35.6,
        },
        {
          name: 'Cash',
          month: 'Jan.',
          averageRainfall: 12.4,
        },
        {
          name: 'Cash',
          month: 'Feb.',
          averageRainfall: 23.2,
        },
        {
          name: 'Cash',
          month: 'Mar.',
          averageRainfall: 34.5,
        },
        {
          name: 'Cash',
          month: 'Apr.',
          averageRainfall: 99.7,
        },
        {
          name: 'Cash',
          month: 'May',
          averageRainfall: 52.6,
        },
        {
          name: 'Cash',
          month: 'Jun.',
          averageRainfall: 35.5,
        },
        {
          name: 'Cash',
          month: 'Jul.',
          averageRainfall: 37.4,
        },
        {
          name: 'Cash',
          month: 'Aug.',
          averageRainfall: 42.4,
        },
      ];
    
      const config = {
        data,
        isGroup: true,
        xField: 'month',
        yField: 'averageRainfall',
        seriesField: 'name',
        label: {
          position: 'middle',
          layout: [
            {
              type: 'interval-adjust-position',
            },
            {
              type: 'interval-hide-overlap',
            },
            {
              type: 'adjust-color',
            },
          ],
        },
      };
    
      return <Column {...config} />;
    };;

export default CorporateIncome;
