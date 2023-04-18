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
  const alcoholCategories = chartsData.map((item) => item.Alcohol);
  const magnesiumValues = chartsData.map((item) => item.Magnesium);
  const minMagnesiumValues: number[] = [];
  alcoholCategories.forEach((category) => {
    const categoryValues = chartsData.filter((item) => item.Alcohol === category).map((item) => item.Magnesium);
    const minMagnesium = Math.min(...categoryValues);
    minMagnesiumValues.push(minMagnesium);
  });
  const flavanoidsValues = chartsData.map((item) => item.Flavanoids);
  const ashValues = chartsData.map((item) => item.Ash);
  const lineChartOptions:ChartOptions = {
    xAxis: {
      type: 'value',
      name: 'Flavanoids',
      data: flavanoidsValues
    },
    yAxis: {
      type: 'value',
      name: 'Ash',
      data: ashValues
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
      data: Array.from(new Set(alcoholCategories)),
      axisLabel: {
        rotate: 45,
        margin: 10
      },
      name: 'Alcohol'
    },
    yAxis: {
      type: 'value',
      name: 'Magnesium'
    },
    series: [{
      type: 'bar',
      data:Array.from(new Set(minMagnesiumValues)),
      name: 'Minimum Magnesium Value'
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
