import React from 'react'
import { ChartOptions } from '../types/types'
import ReactECharts from 'echarts-for-react';
type Props={
    chartOptions:ChartOptions
}
const LineChart = (props:Props) => {
  return (
        <>
        <div>Line Chart</div>
        <ReactECharts option={props.chartOptions} />
        </>
  )
}

export default LineChart