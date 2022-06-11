import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Duration from "./Duration"

const data = [
  {
    uv: 4000,
    amt: 2400,
  },
  {
    uv: 3000,
    amt: 2210,
  },
  {
    uv: 2000,
    amt: 2290,
  },
  {
    uv: 2780,
    amt: 2000,
  },
  {
    uv: 1890,
    amt: 2181,
  },
  {
    uv: 2390,
    amt: 2500,
  },
  {
    uv: 3490,
    amt: 2100,
  },
];

export default function Chart(props : any) {

    const {data : myData, onClickDuration} = props
    console.log("==================myData----------", myData)

    return (
        <>
        <div style={{ width: '100%', height: 300, marginTop: '5%' }}>
          <ResponsiveContainer>
            <AreaChart
              data={myData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis />
              <YAxis dataKey={"amt"} />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <Duration onClickDuration = {onClickDuration} />
        </>
      );
}
