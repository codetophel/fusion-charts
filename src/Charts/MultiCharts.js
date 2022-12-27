import React from 'react';
import { Categories, Dataset } from '../ChartData';

const Column2D = ({ ReactFC }) => {
  const chartConfigs = {
    type: 'mscolumn2d', // The chart type
    width: '80%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Comparison of Quarterly Revenue (2022)',
        xAxisName: 'Quarter',
        yAxisName: 'Revenue',
        numberPrefix: '#',
        plotFillAlpha: '80',
        divLineIsDashed: '1',
        divLineDashLen: '1',
        divLineGapLen: '1',
        theme: 'fusion',
      },
      // Chart Data
      categories: Categories,
      dataset: Dataset,
    },
  };
  return (
    <>
      <h1>Multi Chart</h1>
      <ReactFC {...chartConfigs} />
    </>
  );
};

export default Column2D;
