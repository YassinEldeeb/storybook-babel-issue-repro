import React from 'react'
import { TestClass } from './tests/TestClass'

const DonutChart = () => <h1>I'm a big donut</h1>

export default {
  title: 'Trade App / DonutChart',
  component: DonutChart,
}

const Template = () => {
  const test = new TestClass(42)
  return (
    <>
      <div>{test.getValue()}</div>
      <DonutChart />
    </>
  )
}

export const Default = Template.bind({})
