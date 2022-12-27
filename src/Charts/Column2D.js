import React from 'react';
import { Data } from '../ChartData';

const Column2D = ({ ReactFC }) => {
  const chartConfigs = {
    type: 'column2d', // The chart type
    width: '80%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Revenue Generated Per Month (2022)',
        xAxisName: 'Months',
        yAxisName: 'Revenue',
        numberSuffix: 'NGN',
        labelDisplay: 'rotate',
        theme: 'fusion',
      },
      // Chart Data
      data: Data,
    },
  };
  return (
    <>
      <h1>Column 2D Chart</h1>
      <ReactFC {...chartConfigs} />
    </>
  );
};

export default Column2D;
