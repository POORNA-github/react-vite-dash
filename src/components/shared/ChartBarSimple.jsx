import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function Chart() {
  
  const data = [
    {
      name: '1',
      uv: 2000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '3',
      uv: 2700,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '4',
      uv: 1900,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '5',
      uv: 2100,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '6',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '7',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '8',
      uv: 2000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '9',
      uv: 1300,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '10',
      uv: 2120,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '11',
      uv: 3120,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '12',
      uv: 2700,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '13',
      uv: 2000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '15',
      uv: 3120,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '16',
      uv: 3700,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '17',
      uv: 1780,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '18',
      uv: 1000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '19',
      uv: 3210,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '20',
      uv: 2110,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '21',
      uv: 1300,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '22',
      uv: 2900,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '23',
      uv: 4000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '24',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },

  

  ];
  
 
  return (
    <div className='flex flex-col flex-1'>
    <div className='mt-3 w-full flex-1 text-xs lg:grow'>
    <ResponsiveContainer width={"100.5%"} height={60} >
    <BarChart width={700} height={60} data={data}>
      <Bar 
        dataKey="uv" 
        fill="rgba(54, 162, 235, 0.2)" 
      />
    </BarChart>
    </ResponsiveContainer>
    
    </div>
    </div>
  )
}
