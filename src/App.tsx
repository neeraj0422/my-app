import React,{useEffect, useState} from 'react';
import './App.css';
import LineChart from './charts/LineChart';
import { ChartData, ChartOptions } from './types/types';
import BarChart from './charts/BarChart';

function App() {
  const [chartsData, setChartsData] = useState<ChartData[]>([])
  const [lineChartOptions, setLineChartOptions] = useState<ChartOptions>()
  const [barChartOptions, setBarChartOptions] = useState<ChartOptions>()
  
useEffect(()=>{
  getChartsData();
},[])
useEffect(()=>{
if(chartsData){
  const lineChartOptions:ChartOptions = {
    xAxis: {
      type: 'value',
      name: 'Flavanoids'
    },
    yAxis: {
      type: 'value',
      name: 'Ash'
    },
    series: [{
      type: 'line',
      data: chartsData.map((item) => [item.Flavanoids, item.Ash])
    }]
  };
  setLineChartOptions(lineChartOptions);

  const barChartOptions = {
    xAxis: {
      type: 'category',
      data: chartsData.map((item) => item.Alcohol),
      name: 'Alcohol'
    },
    yAxis: {
      type: 'value',
      name: 'Magnesium'
    },
    series: [{
      type: 'bar',
      data: chartsData.map((item) => item.Magnesium)
    }]
  };
  setBarChartOptions(barChartOptions)
}
},[chartsData])

const getChartsData=()=>{
  fetch('./data.json').then((res)=>{
   res.json().then((data)=>{
    setChartsData(data)
   })
  })
}
  return (
    <div className="App">
    {lineChartOptions &&<LineChart chartOptions={lineChartOptions} />}
    {barChartOptions && <BarChart chartOptions={barChartOptions}/>}
    </div>
  );
}

export default App;
