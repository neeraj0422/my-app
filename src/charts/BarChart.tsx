import React from 'react'
import { ChartOptions } from '../types/types'
import ReactECharts from 'echarts-for-react';
type Props={
    chartOptions:ChartOptions
}

const BarChart = (props:Props) => {
  return (
    <>
        <div>Bar Chart</div>
        <ReactECharts option={props.chartOptions} />
        </> 
  )
}

export default BarChart