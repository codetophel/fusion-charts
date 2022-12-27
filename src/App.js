import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Column2D from './Charts/Column2D';
import Doughnut3D from './Charts/Doughnut3D';
import MultiCharts from './Charts/MultiCharts';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const App = () => {
  return (
    <div className='case'>
      <Column2D ReactFC={ReactFC} />
      <Doughnut3D ReactFC={ReactFC} />
      <MultiCharts ReactFC={ReactFC} />
    </div>
  );
};

export default App;
